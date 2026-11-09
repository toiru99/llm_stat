---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.902
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.1, z: 1.4, r: 71.0, estimated: false }  # 전문 지식
  reasoning: { s: 79.2, z: 1.52, r: 72.8, estimated: false }  # 추론
  coding: { s: 74.9, z: 1.25, r: 68.7, estimated: false }  # 코딩
  agentic: { s: 73.0, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 86.0, z: 1.4, r: 71.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.0 | +1.4 | 실측 | [[gpqa-diamond]] 89.5%×0.4, [[humanitys-last-exam]] 41.1%×0.3 |
| 추론 | 72.8 | +1.52 | 실측 | [[gpqa-diamond]] 89.5%×1.0, [[humanitys-last-exam]] 41.1%×1.0 |
| 코딩 | 68.7 | +1.25 | 실측 | [[scicode]] 51.2%×1.0, [[terminal-bench]] 50.8%×0.5 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[apex-agents]] 33.7%×1.0, [[gdpval]] 1381.0%×1.0, [[itbench]] 42.7%×1.0, [[tau3-banking]] 34.6%×1.0, [[terminal-bench]] 50.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 78.3%×1.0 |
| 지시 따르기 | 71.1 | +1.4 | 실측 | [[ifbench]] 73.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
