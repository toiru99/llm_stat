---
type: Model
title: DeepSeek V4 Flash Vision (max)
creator: DeepSeek
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 0.2298
output_speed_tps: 117.0
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 68.5, z: 1.38, r: 70.7, estimated: false }  # 전문 지식
  reasoning: { s: 63.6, z: 1.47, r: 72.1, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 84.1, z: 1.85, r: 77.8, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.8, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.72, r: 60.8, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.37, r: 70.5, estimated: false }  # 긴문맥
  instruction: { s: 85.6, z: 1.4, r: 71.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash Vision (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# DeepSeek V4 Flash Vision (max)

DeepSeek · Proprietary · Large(284B) · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.44 · 출력 $1.32 · 혼합 $0.2298/1M · 117.0 t/s · TTFT 1.25s · 1M ctx` · 가성비 221.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.7 | +1.38 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 72.1 | +1.47 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 77.8 | +1.85 | 실측 | [[gdpval]] 58.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | 38.1 | -0.8 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 60.8 | +0.72 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 70.5 | +1.37 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 71.0 | +1.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
