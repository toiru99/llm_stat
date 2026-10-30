---
type: Model
title: Kimi K3 (max)
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 56.0
context_window: 1050000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.7, z: 1.73, r: 76.0, estimated: false }  # 전문 지식
  reasoning: { s: 76.6, z: 1.4, r: 71.0, estimated: false }  # 추론
  coding: { s: 86.7, z: 1.66, r: 74.9, estimated: false }  # 코딩
  agentic: { s: 86.3, z: 1.79, r: 76.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.91, r: 63.7, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.43, r: 71.5, estimated: false }  # 긴문맥
  instruction: { s: 84.3, z: 1.32, r: 69.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K3 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Kimi K3 (max)

Kimi · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 56.0 t/s · TTFT 3.48s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.0 | +1.73 | 실측 | [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 71.0 | +1.4 | 실측 | [[critpt]] 40.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 74.9 | +1.66 | 실측 | [[scicode]] 59.0%×1.0 |
| 에이전트 | 76.9 | +1.79 | 실측 | [[apex-agents]] 41.0%×1.0, [[gdpval]] 1543.0%×1.0, [[itbench]] 48.0%×1.0, [[tau3-banking]] 46.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.7 | +0.91 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 71.5 | +1.43 | 실측 | [[aa-lcr]] 89.0%×1.0 |
| 지시 따르기 | 69.8 | +1.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
