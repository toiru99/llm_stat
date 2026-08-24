---
type: Model
title: Nex-N2-Pro
creator: Nex AGI
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.525
output_speed_tps: 137.0
context_window: 262000
status: current
size_class: Large
params_b: 397
is_reasoning: true
radar:
  knowledge: { s: 63.9, z: 1.07, r: 66.0, estimated: false }  # 전문 지식
  reasoning: { s: 60.7, z: 1.22, r: 68.3, estimated: false }  # 추론
  coding: { s: 70.0, z: 0.87, r: 63.1, estimated: false }  # 코딩
  agentic: { s: 57.8, z: 0.8, r: 61.9, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.05, r: 34.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.88, r: 63.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nex-N2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Nex-N2-Pro

Nex AGI · Open · Large(397B) · 컨텍스트 262k · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $2.5 · 혼합 $0.525/1M · 137.0 t/s · TTFT 1.56s · 262k ctx` · 가성비 80.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.0 | +1.07 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 68.3 | +1.22 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 63.1 | +0.87 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 61.9 | +0.8 | 실측 | [[gdpval]] 37.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 34.2 | -1.05 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 63.2 | +0.88 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
