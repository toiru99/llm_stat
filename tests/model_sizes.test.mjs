import {test} from 'node:test';
import assert from 'node:assert/strict';
import {attachModelSizes} from '../scripts/model_sizes.mjs';
import {checkContract} from '../scripts/check_contract.mjs';

const row=(name='Model (Max)', creator='A')=>({Creator:creator,Model:name,License:'Open',aa:{fullName:name}});
const entry=(name,size,creator='A')=>({name,size,creator});

test('공개 표의 전체와 활성 단위 변환, 미공개와 다른 제작사·변형 보존',()=>{
  const rows=[row(),row('Model (High)'),row('Model (Max)','B'),row('No active'),row('Tiny'),row('No entry 7B')];
  attachModelSizes(rows,[entry('Model (max)','2.8T\n104B active at inference time'),entry('No active','27B'),entry('Tiny','500M')]);
  assert.deepEqual(rows.map(r=>r.totalParameters),[2800,undefined,undefined,27,.5,undefined]);
  assert.deepEqual(rows.map(r=>r.aa.activeParameters),[104,undefined,undefined,null,null,undefined]);
});
test('상충하는 모델명·유효하지 않은 측정값을 임의로 채우지 않는다',()=>{
  const rows=[row('X'),row('Y'),row('Z')];
  attachModelSizes(rows,[entry('X','30B'),entry('X','32B'),entry('X','30B'),entry('Y','unknown'),entry('Z','1B\n12B active at inference time')]);
  assert.deepEqual(rows.map(r=>r.totalParameters),[undefined,undefined,1]);
  assert.equal(rows[2].aa.activeParameters,null);
});
test('공개 가중치 표가 추천 모델만 렌더링된 상태로 저장되지 않는다',()=>{
  const rows=Array.from({length:100},(_,i)=>({...row(),paramClass:'small',totalParameters:i<12?7:null}));
  assert.ok(checkContract(rows).some(s=>s.includes('표 로딩 미완료')));
});
