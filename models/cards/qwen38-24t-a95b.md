---
type: Model
title: Qwen3.8 2.4T A95B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 1.175
output_speed_tps: 40.84752505671811
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.6, z: 1.57, r: 73.6, estimated: false }  # 전문 지식
  reasoning: { s: 69.8, z: 1.71, r: 75.6, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 92.2, z: 1.65, r: 74.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 78.4, z: 1.03, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 2.4T A95B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.8 2.4T A95B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 40.84752505671811 t/s · TTFT 4.702999973388552s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.6 | +1.57 | 실측 | [[gpqa-diamond]] 93.53535353535351%×0.4, [[humanitys-last-exam]] 42.4467099165894%×0.3 |
| 추론 | 75.6 | +1.71 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 93.53535353535351%×1.0, [[humanitys-last-exam]] 42.4467099165894%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 54.050925925925895%×1.0 |
| 에이전트 | 74.8 | +1.65 | 실측 | [[gdpval]] 1613.86%×1.0, [[tau3-banking]] 49.0721649484536%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
