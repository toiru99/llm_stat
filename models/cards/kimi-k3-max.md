---
type: Model
title: Kimi K3 (max)
creator: Kimi
license: Open
intelligence_index: 50.0
price_blended_usd_1m: 2.31
output_speed_tps: 40.0
context_window: 1050000
status: current
size_class: Large
params_b: 2800
is_reasoning: true
radar:
  knowledge: { s: 79.1, z: 1.84, r: 77.6, estimated: false }  # 전문 지식
  reasoning: { s: 83.0, z: 2.31, r: 84.6, estimated: false }  # 추론
  coding: { s: 91.8, z: 2.1, r: 81.5, estimated: false }  # 코딩
  agentic: { s: 86.6, z: 1.88, r: 78.2, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 1.04, r: 65.6, estimated: false }  # 신뢰성
  multimodal: { s: 91.7, z: 1.06, r: 66.0, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.57, r: 73.5, estimated: false }  # 긴문맥
  instruction: { s: 75.7, z: 0.97, r: 64.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Kimi K3 (max)

Kimi · Open · Large(2800B) · 컨텍스트 1M · 종합지능 **50.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 40.0 t/s · TTFT 4.72s · 1M ctx` · 가성비 21.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.6 | +1.84 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 84.6 | +2.31 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 81.5 | +2.1 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 78.2 | +1.88 | 실측 | [[apex-agents]] 41.0%×1.0, [[gdpval]] 54.0%×1.0, [[itbench]] 48.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | 65.6 | +1.04 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 66.0 | +1.06 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 73.5 | +1.57 | 실측 | [[aa-lcr]] 89.0%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
