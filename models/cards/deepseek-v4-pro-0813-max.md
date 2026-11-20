---
type: Model
title: DeepSeek V4 Pro 0813 (max)
creator: DeepSeek
license: Open
intelligence_index: 23.0632981493003
price_blended_usd_1m: 0.6908
output_speed_tps: 78.2550061944263
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.49, r: 72.4, estimated: false }  # 전문 지식
  reasoning: { s: 67.0, z: 1.55, r: 73.2, estimated: false }  # 추론
  coding: { s: 72.6, z: 1.11, r: 66.6, estimated: false }  # 코딩
  agentic: { s: 79.5, z: 1.2, r: 67.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.82, r: 62.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# DeepSeek V4 Pro 0813 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **23.0632981493003**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 78.2550061944263 t/s · TTFT 2.10354363610713s · 1M ctx` · 가성비 33.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.4 | +1.49 | 실측 | [[gpqa-diamond]] 92.82828282828281%×0.4, [[humanitys-last-exam]] 41.0101946246525%×0.3 |
| 추론 | 73.2 | +1.55 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 92.82828282828281%×1.0, [[humanitys-last-exam]] 41.0101946246525%×1.0 |
| 코딩 | 66.6 | +1.11 | 실측 | [[scicode]] 51.0416666666667%×1.0 |
| 에이전트 | 67.9 | +1.2 | 실측 | [[gdpval]] 1455.59%×1.0, [[tau3-banking]] 39.587628865979404%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 62.2 | +0.82 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
