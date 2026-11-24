---
type: Model
title: DeepSeek V4 Flash Vision (max)
creator: DeepSeek
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2298
output_speed_tps: 164.121916097953
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.4, z: 1.3, r: 69.4, estimated: false }  # 전문 지식
  reasoning: { s: 56.8, z: 1.07, r: 66.1, estimated: false }  # 추론
  coding: { s: 70.3, z: 0.99, r: 64.8, estimated: false }  # 코딩
  agentic: { s: 83.1, z: 1.27, r: 69.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.4, z: 0.46, r: 56.9, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash Vision (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V4 Flash Vision (max)

DeepSeek · Proprietary · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.44 · 출력 $1.32 · 혼합 $0.2298/1M · 164.121916097953 t/s · TTFT 1.98678289106497s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.4 | +1.3 | 실측 | [[gpqa-diamond]] 91.3131%×0.4, [[humanitys-last-exam]] 34.4764%×0.3 |
| 추론 | 66.1 | +1.07 | 실측 | [[critpt]] 10.8571%×1.0, [[gpqa-diamond]] 91.3131%×1.0, [[humanitys-last-exam]] 34.4764%×1.0 |
| 코딩 | 64.8 | +0.99 | 실측 | [[scicode]] 49.6528%×1.0 |
| 에이전트 | 69.0 | +1.27 | 실측 | [[gdpval]] 1555.34 Elo×1.0, [[tau3-banking]] 41.0309%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.9 | +0.46 | 실측 | [[mmmu-pro]] 74.7977%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 81.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
