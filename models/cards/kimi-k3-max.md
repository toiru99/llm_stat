---
type: Model
title: Kimi K3 (max)
creator: Kimi
license: Open
intelligence_index: 60.0
price_blended_usd_1m: 2.31
output_speed_tps: 44.0
context_window: 1050000
status: current
size_class: Large
params_b: 2800
is_reasoning: true
radar:
  knowledge: { s: 81.8, z: 1.97, r: 79.5, estimated: false }  # 전문 지식
  reasoning: { s: 85.7, z: 2.52, r: 87.7, estimated: false }  # 추론
  coding: { s: 98.3, z: 2.12, r: 81.8, estimated: false }  # 코딩
  agentic: { s: 87.7, z: 2.06, r: 81.0, estimated: false }  # 에이전트
  trust: { s: 52.3, z: 1.19, r: 67.9, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.54, r: 73.1, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Kimi K3 (max)

Kimi · Open · Large(2800B) · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 44.0 t/s · TTFT 2.37s · 1M ctx` · 가성비 26.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.5 | +1.97 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 87.7 | +2.52 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 81.8 | +2.12 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 81.0 | +2.06 | 실측 | [[apex-agents]] 41.0%×1.0, [[gdpval]] 59.0%×1.0, [[itbench]] 48.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | 67.9 | +1.19 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 73.1 | +1.54 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
