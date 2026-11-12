---
type: Model
title: DeepSeek V4 Flash Vision (max)
creator: DeepSeek
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2298
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.4, z: 1.28, r: 69.2, estimated: false }  # 전문 지식
  reasoning: { s: 69.9, z: 1.31, r: 69.7, estimated: false }  # 추론
  coding: { s: 70.4, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 81.6, z: 1.59, r: 73.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.1, z: 0.49, r: 57.3, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 75.9, z: 0.99, r: 64.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash Vision (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# DeepSeek V4 Flash Vision (max)

DeepSeek · Proprietary · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.44 · 출력 $1.32 · 혼합 $0.2298/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.2 | +1.28 | 실측 | [[gpqa-diamond]] 91.3%×0.4, [[humanitys-last-exam]] 34.5%×0.3 |
| 추론 | 69.7 | +1.31 | 실측 | [[gpqa-diamond]] 91.3%×1.0, [[humanitys-last-exam]] 34.5%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 49.7%×1.0 |
| 에이전트 | 73.8 | +1.59 | 실측 | [[gdpval]] 1554.0%×1.0, [[tau3-banking]] 41.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.3 | +0.49 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 81.3%×1.0 |
| 지시 따르기 | 64.9 | +0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
