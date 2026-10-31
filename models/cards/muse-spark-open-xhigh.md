---
type: Model
title: Muse Spark Open (xhigh)
creator: Meta
license: Open
intelligence_index: 25.0
price_blended_usd_1m: 0.78
output_speed_tps: 139.0
context_window: 1050000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.2, z: 1.49, r: 72.4, estimated: false }  # 전문 지식
  reasoning: { s: 67.5, z: 0.98, r: 64.8, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.61, r: 74.1, estimated: false }  # 코딩
  agentic: { s: 75.1, z: 1.41, r: 71.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.91, r: 63.7, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.87, r: 63.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark Open (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Muse Spark Open (xhigh)

Meta · Open · Large · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 139.0 t/s · TTFT 0.73s · 1M ctx` · 가성비 32.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.4 | +1.49 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 64.8 | +0.98 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 74.1 | +1.61 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 71.1 | +1.41 | 실측 | [[gdpval]] 1401.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.7 | +0.91 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
