// Public sizes as displayed by AA, converted to billions. No inference from model names.
export const SIZE_SOURCE = 'https://artificialanalysis.ai/models/open-source';
function billions(text) {
  const match = /^(\d+(?:\.\d+)?)\s*([MBT])$/i.exec(text.trim());
  if (!match) return null;
  const value = Number(match[1]) * ({M:0.001, B:1, T:1000})[match[2].toUpperCase()];
  return Number.isFinite(value) && value > 0 ? value : null;
}

export function attachModelSizes(rows, measurements) {
  const identity = (creator,name) => JSON.stringify([creator,name].map(s=>s.trim().toLowerCase()));
  const byModel = new Map();
  for (const {creator,name,size} of measurements) {
    const key = identity(creator,name);
    const [total,active=''] = size.trim().split(/\n+/);
    const totalB = billions(total);
    if (totalB===null) continue;
    const activeMatch = /^(.+?)\s+active at inference time$/i.exec(active.trim());
    const activeB = activeMatch ? billions(activeMatch[1]) : null;
    const record = {totalB, activeB:activeB!==null && activeB<=totalB ? activeB : null};
    const prev = byModel.get(key);
    // Conflicting duplicate names cannot be joined to a variant safely.
    if (byModel.has(key) && (prev?.totalB!==record.totalB || prev?.activeB!==record.activeB)) byModel.set(key,null);
    else byModel.set(key,record);
  }
  for (const row of rows) {
    if (row.License!=='Open') continue;
    const key = identity(row.Creator,row.aa.fullName);
    const size = byModel.get(key);
    if (!size) continue;
    row.totalParameters = size.totalB;
    row.aa.activeParameters = size.activeB;
  }
}

export async function readSizeTable(page, minimumRows) {
  await page.goto(SIZE_SOURCE, {waitUntil:'domcontentloaded',timeout:90000});
  const table = page.getByRole('table').filter({has:page.getByRole('columnheader',{name:'Parameters',exact:true})});
  await table.locator('tbody tr').nth(minimumRows-1).waitFor({state:'attached'});
  return table.evaluate(t => {
    const headers = Array.from(t.tHead.rows[0].cells,c=>c.innerText.trim());
    const indexes = ['Model Creator','Model Name','Parameters'].map(label=>headers.indexOf(label));
    if (indexes.includes(-1)) throw new Error('공개 가중치 표의 제작사·모델·파라미터 열 확인 필요');
    return Array.from(t.tBodies[0].rows).filter(r=>r.cells.length===headers.length).map(r=>{
      const [creator,name,size] = indexes.map(i=>r.cells[i].innerText.trim());
      return {creator,name,size};
    });
  });
}
