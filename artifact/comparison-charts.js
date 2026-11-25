// The percentage evaluations share a physical scale. The Elo evaluation keeps its own unit.
const percentAxes = INDEX_COMPONENTS.filter(c => c.unit === '%');
const sizeRanges = {Tiny:'4B 미만', Small:'4–40B', Medium:'40–150B', Large:'150B 초과'};
const measuredLegacy = (m, key) => {
  const d = m.radar?.[key];
  return d?.measured && !d.estimated && Number.isFinite(d.r) ? d.r : null;
};

function radarHTML(sel) {
  const legacy = state.radarMode === 'legacy';
  const axes = legacy ? AX.map(key => ({key, short:LAB[key], label:LAB[key]})) : percentAxes;
  const value = (m, key) => {
    if (legacy) return measuredLegacy(m, key);
    const v = m.aa?.scores?.[key];
    return Number.isFinite(v) ? v * 100 : null;
  };
  const pt = (i, v) => {
    const a = i * 2 * Math.PI / axes.length - Math.PI / 2;
    return [240 + Math.cos(a) * 1.54 * v, 195 + Math.sin(a) * 1.54 * v];
  };
  const vertices = radius => axes.map((_, i) => pt(i, radius).join(',')).join(' ');
  const grid = [25,50,75,100].map(r =>
    `<polygon points="${vertices(r)}" fill="none" stroke="var(--line)" ${legacy && r===50?'stroke-dasharray="3 3"':''}/><text x="245" y="${pt(0,r)[1]+10}" class="grid-value">${r}${legacy?'':'%'}</text>`
  ).join('');
  const spokes = axes.map((c,i) => {
    const [x,y] = pt(i,100), [lx,ly] = pt(i,109);
    const anchor = Math.abs(lx-240)<5 ? 'middle' : lx>240 ? 'start' : 'end';
    return `<line x1="240" y1="195" x2="${x}" y2="${y}" stroke="var(--line-soft)"/>
      <text x="${lx}" y="${ly+4}" text-anchor="${anchor}" class="axis-label"><title>${c.label}</title>${c.short}</text>`;
  }).join('');
  const descriptions = [];
  const traces = sel.map((m,si) => {
    const color = `var(${SERIES[si]})`;
    const points = axes.map((c,i) => {
      const v = value(m,c.key);
      return v==null ? null : {xy:pt(i,v), v, c};
    });
    const known = points.filter(Boolean);
    descriptions.push(`<span style="--slot-color:${color}"><b>${safe(m.name)}</b> ${known.length}/${axes.length}축 실측</span>`);
    let shape = '';
    if (known.length === axes.length) {
      shape = `<polygon points="${known.map(p=>p.xy).join(' ')}" fill="${color}" fill-opacity=".09" stroke="${color}" stroke-width="2.2"/>`;
    } else {
      // Connect only adjacent measured axes. Never bridge a gap or place a missing point at 50.
      points.forEach((p,i) => {
        const next = points[(i+1)%points.length];
        if (p && next) shape += `<path d="M${p.xy} L${next.xy}" stroke="${color}" stroke-width="2.2"/>`;
      });
    }
    const dots = known.map(p=>`<circle data-axis="${p.c.key}" cx="${p.xy[0]}" cy="${p.xy[1]}" r="3.5" fill="${color}"><title>${safe(m.name)} · ${p.c.label} · ${dec(p.v)}${legacy?'점':'%'}</title></circle>`).join('');
    return `<g class="trace" data-model="${safe(m.slug)}">${shape}${dots}</g>`;
  }).join('');
  const mode = `<div class="chart-heading"><h2>${legacy?'구형 8축 상대점수':'AA 지수 구성 평가'}</h2>
    <label>레이더 기준 <select id="radar-mode"><option value="current" ${legacy?'':'selected'}>AA v5 실측</option><option value="legacy" ${legacy?'selected':''}>구형 8축</option></select></label></div>`;
  const elo = INDEX_COMPONENTS.find(c=>c.unit==='Elo');
  const eloBand = legacy ? '' : `<div class="elo-band"><strong>문서 업무 <small>${elo.label}</small></strong><div>
    ${sel.map((m,i)=>`<span style="--slot-color:var(${SERIES[i]})"><b>${safe(m.name)}</b> ${scoreText(m.aa?.scores?.[elo.key],elo.unit)}</span>`).join('')}</div></div>`;
  return mode + `<p class="chart-note">${legacy?'축별 실측 모델의 평균은 50점입니다. 빈 축은 실측 근거가 없습니다.':'백분율로 측정한 9개 점수입니다. 문서 업무는 아래에 Elo로 표시합니다.'}</p>
    <svg class="radar-chart" viewBox="0 0 480 388" role="img" aria-label="능력 레이더">${spokes}${grid}${traces}</svg>
    <div class="chart-keys">${descriptions.join('')}</div>${eloBand}`;
}

const sizeModes = {total:'전체 파라미터', active:'활성 파라미터', group:'크기 구간'};
function parameterCount(m, mode) {
  const value = mode==='active' ? m.aa?.activeParameters : m.params;
  return Number.isFinite(value) && value>0 ? value : null;
}
function sizePlot(models, mode) {
  const groups = Object.keys(sizeRanges), grouped = mode==='group';
  const left=82, right=472, bottom=217, top=20;
  const maxScore = Math.max(10, Math.ceil(Math.max(...models.map(m=>m.intel))/10)*10);
  const scoreTicks = Array.from({length:maxScore/10+1},(_,i)=>i*10);
  let background, position;
  if (grouped) {
    const x = v=>left+v/maxScore*(right-left);
    const y = size=>36+groups.indexOf(size)*45;
    const lines = scoreTicks.map(v=>`<line x1="${x(v)}" x2="${x(v)}" y1="15" y2="192" stroke="var(--line-soft)"/><text x="${x(v)}" y="213" text-anchor="middle" class="grid-value">${v}</text>`).join('');
    const labels = groups.map(size=>`<text x="6" y="${y(size)-2}" class="axis-label">${size}</text><text x="6" y="${y(size)+12}" class="grid-value">${sizeRanges[size]}</text><line x1="${left}" x2="${right}" y1="${y(size)}" y2="${y(size)}" stroke="var(--line)"/>`).join('');
    background = lines+labels+'<text x="278" y="237" text-anchor="middle" class="axis-label">AA Intelligence Index →</text>';
    position=m=>[x(m.intel),y(m.size)];
  } else {
    const logs = models.map(m=>Math.log10(parameterCount(m,mode)));
    const low=Math.floor(Math.min(...logs)), high=Math.max(low+1,Math.ceil(Math.max(...logs)));
    const x=v=>left+(Math.log10(v)-low)/(high-low)*(right-left);
    const y=v=>bottom-v/maxScore*(bottom-top);
    const xTicks=Array.from({length:high-low+1},(_,i)=>10**(low+i));
    const lines = scoreTicks.map(v=>`<line x1="${left}" x2="${right}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line-soft)"/><text x="${left-8}" y="${y(v)+4}" text-anchor="end" class="grid-value">${v}</text>`).join('');
    const labels = xTicks.map(v=>`<line x1="${x(v)}" x2="${x(v)}" y1="${top}" y2="${bottom}" stroke="var(--line-soft)"/><text text-anchor="middle" x="${x(v)}" y="${bottom+16}" class="grid-value">${dec(v)}B</text>`).join('');
    background = lines+labels+`<text transform="translate(28 124) rotate(-90)" text-anchor="middle" class="axis-label">AA Intelligence Index</text><text x="275" y="258" text-anchor="middle" class="axis-label">${sizeModes[mode]} (로그 눈금) →</text>`;
    position=m=>[x(parameterCount(m,mode)),y(m.intel)];
  }
  const points = [...models].sort((a,b)=>state.selected.indexOf(a.slug)-state.selected.indexOf(b.slug)).map(m=>{
    const i=state.selected.indexOf(m.slug), [x,y]=position(m);
    const size=grouped?m.size:dec(parameterCount(m,mode))+'B';
    return `<circle data-slug="${safe(m.slug)}" cx="${x}" cy="${y}" r="${i>=0?6:4.4}" fill="${i>=0?`var(${SERIES[i]})`:'#387989'}" fill-opacity="${i>=0?1:.75}" stroke="white" stroke-width="1"><title>${safe(m.name)} · ${size} · AA 지수 ${dec(m.intel)}</title></circle>`;
  }).join('');
  return `<svg viewBox="0 0 500 ${grouped?248:272}" role="img" aria-label="${sizeModes[mode]}별 AA 종합지수">${background}${points}</svg>`;
}

function sizeHTML(sel) {
  const rows = filtered(), mode = state.sizeMode;
  const scored = rows.filter(m=>Number.isFinite(m.intel));
  const known = scored.filter(m=>mode==='group'?Object.hasOwn(sizeRanges,m.size):parameterCount(m,mode)!=null);
  const groups = {...sizeRanges,Unknown:'구간 미상'};
  const tables = Object.entries(groups).map(([size,range])=>{
    const models=known.filter(m=>m.size===size).sort((a,b)=>b.intel-a.intel||a.name.localeCompare(b.name));
    if (!models.length) return '';
    return `<details class="size-group" data-size="${size}" ${state.openSizes.has(size)?'open':''}><summary><strong>${size} · ${range}</strong><span>${models.length}개 모델</span></summary>
      <table class="size-table"><thead><tr><th>모델</th><th>전체</th><th>활성</th><th>AA 지수</th><th>비교</th></tr></thead><tbody>${models.map(m=>{
        const i=state.selected.indexOf(m.slug), display=k=>parameterCount(m,k)==null?'—':dec(parameterCount(m,k))+'B';
        return `<tr><td><button data-model="${safe(m.slug)}">${safe(m.name)}</button></td><td>${display('total')}</td><td>${display('active')}</td><td>${dec(m.intel)}</td><td><button data-add-model="${safe(m.slug)}" aria-label="${safe(m.name)} ${i<0?'비교에 추가':'비교에서 제외'}">${i<0?'+':'✓'}</button></td></tr>`;
      }).join('')}</tbody></table></details>`;
  }).join('');
  const note = {total:'모델 전체의 파라미터 수와 AA 종합지수를 비교합니다.',active:'추론 시 토큰 하나를 처리할 때 쓰는 파라미터 수입니다. AA가 활성 수를 별도로 공개한 모델을 표시합니다.',group:'AA의 파라미터 구간별로 종합지수를 비교합니다.'}[mode];
  return `<div class="chart-heading"><h2>모델 크기별 성능</h2><label>크기 기준 <select id="size-mode">${Object.entries(sizeModes).map(([key,label])=>`<option value="${key}" ${key===mode?'selected':''}>${label}</option>`).join('')}</select></label></div>
    <p class="chart-note">${note} 1B는 10억 파라미터이며 점 하나는 모델의 추론 설정 한 가지입니다.</p>
    <div class="size-coverage">표시 <b>${known.length}</b> / ${rows.length}개 · 지수 미측정 ${rows.length-scored.length}개 · 지수는 있고 ${sizeModes[mode]} 미상 ${scored.length-known.length}개</div>
    ${known.length?sizePlot(known,mode):'<p class="empty">현재 조건에서 크기와 지수가 모두 있는 모델이 없습니다. 크기 기준이나 필터를 바꿔 보세요.</p>'}
    <div class="chart-keys">${sel.map((m,i)=>`<span style="--slot-color:var(${SERIES[i]})"><b>${safe(m.name)}</b> · ${known.includes(m)?'차트에 표시':!rows.includes(m)?'필터 밖':!Number.isFinite(m.intel)?'지수 미측정':sizeModes[mode]+' 미상'}</span>`).join('')}</div>
    <p class="chart-note">파라미터 수는 <a href="https://artificialanalysis.ai/models/open-source">AA 공개 가중치 표</a>의 표시 정밀도를 따릅니다.</p>${tables}`;
}
