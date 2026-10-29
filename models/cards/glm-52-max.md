---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.902
output_speed_tps: 96.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.1, z: 1.39, r: 70.8, estimated: false }  # 전문 지식
  reasoning: { s: 79.3, z: 1.51, r: 72.6, estimated: false }  # 추론
  coding: { s: 74.6, z: 1.25, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 73.6, z: 1.35, r: 70.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.39, r: 70.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 96.0 t/s · TTFT 2.99s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.8 | +1.39 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 72.6 | +1.51 | 실측 | [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 68.8 | +1.25 | 실측 | [[scicode]] 51.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 70.3 | +1.35 | 실측 | [[apex-agents]] 34.0%×1.0, [[gdpval]] 1382.0%×1.0, [[itbench]] 43.0%×1.0, [[tau3-banking]] 35.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 70.9 | +1.39 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
