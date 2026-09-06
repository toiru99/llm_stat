---
type: Model
title: Hy3
creator: Tencent
license: Open
intelligence_index: 33.0
price_blended_usd_1m: 0.1064
output_speed_tps: 96.0
context_window: 256000
status: current
size_class: Large
params_b: 299
is_reasoning: true
radar:
  knowledge: { s: 59.7, z: 0.91, r: 63.6, estimated: false }  # 전문 지식
  reasoning: { s: 54.6, z: 0.94, r: 64.1, estimated: false }  # 추론
  coding: { s: 71.4, z: 1.37, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 47.5, z: 0.38, r: 55.8, estimated: false }  # 에이전트
  trust: { s: 24.7, z: 0.01, r: 50.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 83.5, z: 1.28, r: 69.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Hy3

Tencent · Open · Large(299B) · 컨텍스트 256k · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.55 · 혼합 $0.1064/1M · 96.0 t/s · TTFT 2.73s · 256k ctx` · 가성비 310.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.6 | +0.91 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 64.1 | +0.94 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 70.5 | +1.37 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 55.8 | +0.38 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | 50.2 | +0.01 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 69.3 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
