---
type: Model
title: Hy3
creator: Tencent
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.1067
output_speed_tps: 72.0
context_window: 256000
status: current
size_class: Large
params_b: 299
is_reasoning: true
radar:
  knowledge: { s: 61.1, z: 0.95, r: 64.2, estimated: false }  # 전문 지식
  reasoning: { s: 56.3, z: 1.03, r: 65.4, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 49.4, z: 0.5, r: 57.6, estimated: false }  # 에이전트
  trust: { s: 27.9, z: 0.04, r: 50.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 82.5, z: 1.15, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Hy3

Tencent · Open · Large(299B) · 컨텍스트 256k · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.56 · 혼합 $0.1067/1M · 72.0 t/s · TTFT 2.83s · 256k ctx` · 가성비 393.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.2 | +0.95 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 65.4 | +1.03 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 57.6 | +0.5 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | 50.5 | +0.04 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
