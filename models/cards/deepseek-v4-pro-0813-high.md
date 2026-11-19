---
type: Model
title: DeepSeek V4 Pro 0813 (high)
creator: DeepSeek
license: Open
intelligence_index: 20.799409628237
price_blended_usd_1m: 0.6908
output_speed_tps: 75.0165584276031
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.2, z: 0.38, r: 55.7, estimated: false }  # 전문 지식
  reasoning: { s: 53.6, z: 0.89, r: 63.3, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.14, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 76.6, z: 1.1, r: 66.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.06, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 65.8, z: 0.5, r: 57.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# DeepSeek V4 Pro 0813 (high)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **20.799409628237**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 75.0165584276031 t/s · TTFT 3.20108583066251s · 1M ctx` · 가성비 30.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.7 | +0.38 | 실측 | [[humanitys-last-exam]] 41.4735866543095%×0.3 |
| 추론 | 63.3 | +0.89 | 실측 | [[critpt]] 18.5714285714286%×1.0, [[humanitys-last-exam]] 41.4735866543095%×1.0 |
| 코딩 | 67.2 | +1.14 | 실측 | [[scicode]] 51.73611111111111%×1.0 |
| 에이전트 | 66.5 | +1.1 | 실측 | [[gdpval]] 1336.22%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.0 | +1.06 | 실측 | [[aa-lcr]] 79.3333333333333%×1.0 |
| 지시 따르기 | 57.5 | +0.5 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
