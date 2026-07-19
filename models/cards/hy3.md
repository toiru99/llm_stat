---
type: Model
title: Hy3
creator: Tencent
license: Open
intelligence_index: 41.0
price_blended_usd_1m: 0.0
output_speed_tps: 50.0
context_window: 256000
status: current
size_class: Large
params_b: 299
is_reasoning: true
radar:
  knowledge: { s: 63.3, z: 1.1, r: 66.5, estimated: false }  # 전문 지식
  reasoning: { s: 56.8, z: 1.22, r: 68.3, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.42, r: 71.3, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: 30.6, z: 0.14, r: 52.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 75.8, z: 0.96, r: 64.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# Hy3

Tencent · Open · Large(299B) · 컨텍스트 256k · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · 50.0 t/s · TTFT 2.43s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.5 | +1.1 | 실측 | [[aa-omniscience]] 32.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 68.3 | +1.22 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 71.3 | +1.42 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 21.0%×1.0 |
| 신뢰성 | 52.0 | +0.14 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 64.5 | +0.96 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
