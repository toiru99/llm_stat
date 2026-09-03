---
type: Model
title: DeepSeek V4 Pro 0813 (max)
creator: DeepSeek
license: Open
intelligence_index: 53.0
price_blended_usd_1m: 0.6908
output_speed_tps: 58.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 78.2, z: 1.85, r: 77.7, estimated: false }  # 전문 지식
  reasoning: { s: 74.3, z: 1.95, r: 79.3, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.34, r: 70.1, estimated: false }  # 코딩
  agentic: { s: 78.2, z: 1.58, r: 73.7, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.02, r: 34.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 81.2, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# DeepSeek V4 Pro 0813 (max)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 58.0 t/s · TTFT 1.7s · 1M ctx` · 가성비 76.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.7 | +1.85 | 실측 | [[aa-omniscience]] 49.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 79.3 | +1.95 | 실측 | [[critpt]] 18.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.1 | +1.34 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 73.7 | +1.58 | 실측 | [[gdpval]] 54.0%×1.0, [[tau3-banking]] 40.0%×1.0 |
| 신뢰성 | 34.7 | -1.02 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
