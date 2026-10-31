---
type: Model
title: DeepSeek V4 Flash Vision (max)
creator: DeepSeek
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2298
output_speed_tps: 163.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.23, r: 68.5, estimated: false }  # 전문 지식
  reasoning: { s: 74.6, z: 1.31, r: 69.6, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 81.8, z: 1.64, r: 74.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.5, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 80.0, z: 1.14, r: 67.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash Vision (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# DeepSeek V4 Flash Vision (max)

DeepSeek · Proprietary · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.44 · 출력 $1.32 · 혼합 $0.2298/1M · 163.0 t/s · TTFT 1.41s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.5 | +1.23 | 실측 | [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 69.6 | +1.31 | 실측 | [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 74.6 | +1.64 | 실측 | [[gdpval]] 1554.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.5 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 67.2 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
