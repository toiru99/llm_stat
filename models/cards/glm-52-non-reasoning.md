---
type: Model
title: GLM-5.2 (Non-reasoning)
creator: Z AI
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.902
output_speed_tps: 165.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.3, z: -0.25, r: 46.2, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.22, r: 46.8, estimated: false }  # 추론
  coding: { s: 33.6, z: -0.05, r: 49.3, estimated: true }  # 코딩
  agentic: { s: 44.3, z: 0.25, r: 53.8, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.88, r: 78.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.1, r: 48.5, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.46, r: 43.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# GLM-5.2 (Non-reasoning)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 165.0 t/s · TTFT 1.2s · 1M ctx` · 가성비 24.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.2 | -0.25 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.8 | -0.22 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 49.3 | -0.05 | 추정 | (추정) |
| 에이전트 | 53.8 | +0.25 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 17.0%×1.0 |
| 신뢰성 | 78.3 | +1.88 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.5 | -0.1 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 43.0 | -0.46 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
