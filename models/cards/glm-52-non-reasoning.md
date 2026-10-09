---
type: Model
title: GLM-5.2 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.902
output_speed_tps: 135.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.3, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.26, r: 46.1, estimated: false }  # 추론
  coding: { s: 33.6, z: -0.11, r: 48.4, estimated: true }  # 코딩
  agentic: { s: 44.6, z: 0.21, r: 53.2, estimated: false }  # 에이전트
  trust: { s: 66.0, z: 1.81, r: 77.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.15, r: 47.8, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.51, r: 42.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# GLM-5.2 (non-reasoning)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.902/1M · 135.0 t/s · TTFT 1.22s · 1M ctx` · 가성비 24.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.1 | -0.26 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 48.4 | -0.11 | 추정 | (추정) |
| 에이전트 | 53.2 | +0.21 | 실측 | [[gdpval]] 38.0%×1.0, [[tau3-banking]] 17.0%×1.0 |
| 신뢰성 | 77.2 | +1.81 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.8 | -0.15 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 42.4 | -0.51 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
