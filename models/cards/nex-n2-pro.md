---
type: Model
title: Nex-N2-Pro
creator: Nex AGI
license: Open
intelligence_index: 33.0
price_blended_usd_1m: 0.525
output_speed_tps: 126.0
context_window: 262000
status: current
size_class: Large
params_b: 397
is_reasoning: true
radar:
  knowledge: { s: 62.4, z: 1.03, r: 65.5, estimated: false }  # 전문 지식
  reasoning: { s: 59.0, z: 1.15, r: 67.3, estimated: false }  # 추론
  coding: { s: 63.0, z: 1.09, r: 66.3, estimated: true }  # 코딩
  agentic: { s: 57.1, z: 0.75, r: 61.3, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -1.01, r: 34.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.32, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.98, r: 64.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nex-N2-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Nex-N2-Pro

Nex AGI · Open · Large(397B) · 컨텍스트 262k · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.5 · 출력 $2.5 · 혼합 $0.525/1M · 126.0 t/s · TTFT 1.75s · 262k ctx` · 가성비 62.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.5 | +1.03 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 67.3 | +1.15 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 66.3 | +1.09 | 추정 | (추정) |
| 에이전트 | 61.3 | +0.75 | 실측 | [[gdpval]] 34.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[tau3-banking]] 18.0%×1.0 |
| 신뢰성 | 34.9 | -1.01 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.9 | +1.32 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
