---
type: Model
title: GLM-4.5V
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.377
output_speed_tps: 35.373159320463394
context_window: 64000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.8, z: -0.27, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.0, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 8.0, z: -1.08, r: 33.7, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 48.0, z: -1.2, r: 32.0, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.95, r: 35.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.5V
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GLM-4.5V

Z AI · Open · Medium · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.6 · 출력 $1.8 · 혼합 $0.377/1M · 35.373159320463394 t/s · TTFT 2.998230601313331s · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.27 | 실측 | [[gpqa-diamond]] 68.38383838383841%×0.4, [[humanitys-last-exam]] 6.302131603336419%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.38383838383841%×1.0, [[humanitys-last-exam]] 6.302131603336419%×1.0 |
| 코딩 | 33.7 | -1.08 | 실측 | [[terminal-bench]] 5.3030303030303%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[tau2-bench]] 22.5146198830409%×1.0, [[terminal-bench]] 5.3030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 32.0 | -1.2 | 실측 | [[mmmu-pro]] 50.4624277456647%×1.0 |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.7 | -0.95 | 실측 | [[ifbench]] 34.2176870748299%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
