---
type: Model
title: DeepSeek V4 Flash Vision (max)
creator: DeepSeek
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2298
output_speed_tps: 168.22234675208418
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.4, z: 1.26, r: 68.9, estimated: false }  # 전문 지식
  reasoning: { s: 56.8, z: 1.04, r: 65.7, estimated: false }  # 추론
  coding: { s: 70.3, z: 1.03, r: 65.4, estimated: false }  # 코딩
  agentic: { s: 83.1, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.4, z: 0.46, r: 56.9, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 78.2, z: 1.02, r: 65.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash Vision (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# DeepSeek V4 Flash Vision (max)

DeepSeek · Proprietary · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.44 · 출력 $1.32 · 혼합 $0.2298/1M · 168.22234675208418 t/s · TTFT 1.4701002169685093s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.9 | +1.26 | 실측 | [[gpqa-diamond]] 91.31313131313131%×0.4, [[humanitys-last-exam]] 34.4763670064875%×0.3 |
| 추론 | 65.7 | +1.04 | 실측 | [[critpt]] 10.8571428571429%×1.0, [[gpqa-diamond]] 91.31313131313131%×1.0, [[humanitys-last-exam]] 34.4763670064875%×1.0 |
| 코딩 | 65.4 | +1.03 | 실측 | [[scicode]] 49.6527777777778%×1.0 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[gdpval]] 1554.95%×1.0, [[tau3-banking]] 41.0309278350515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.9 | +0.46 | 실측 | [[mmmu-pro]] 74.7976878612717%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 81.3333333333333%×1.0 |
| 지시 따르기 | 65.3 | +1.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
