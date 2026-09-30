---
type: Model
title: Qwen3.8 2.4T A95B
creator: Alibaba
license: Open
intelligence_index: 40.0
price_blended_usd_1m: 1.175
output_speed_tps: 39.0
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.3, z: 0.92, r: 63.9, estimated: false }  # 전문 지식
  reasoning: { s: 76.2, z: 1.82, r: 77.4, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.46, r: 71.9, estimated: false }  # 코딩
  agentic: { s: 89.1, z: 1.95, r: 79.2, estimated: false }  # 에이전트
  trust: { s: 60.8, z: 1.62, r: 74.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 78.7, z: 1.03, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 2.4T A95B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Qwen3.8 2.4T A95B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · 39.0 t/s · TTFT 2.91s · 262k ctx` · 가성비 34.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.9 | +0.92 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 77.4 | +1.82 | 실측 | [[critpt]] 20.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 71.9 | +1.46 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 79.2 | +1.95 | 실측 | [[gdpval]] 55.0%×1.0, [[tau3-banking]] 49.0%×1.0 |
| 신뢰성 | 74.3 | +1.62 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
