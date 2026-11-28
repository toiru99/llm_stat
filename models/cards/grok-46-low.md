---
type: Model
title: Grok 4.6 (low)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.35
output_speed_tps: 82.1500764481963
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.1, z: 0.99, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 47.5, z: 0.61, r: 59.2, estimated: false }  # 추론
  coding: { s: 69.9, z: 0.97, r: 64.6, estimated: false }  # 코딩
  agentic: { s: 77.3, z: 1.06, r: 65.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Grok 4.6 (low)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 82.1500764481963 t/s · TTFT 5.8684470477117s · 500k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +0.99 | 실측 | [[gpqa-diamond]] 87.8788%×0.4, [[humanitys-last-exam]] 27.6182%×0.3 |
| 추론 | 59.2 | +0.61 | 실측 | [[critpt]] 5.71429%×1.0, [[gpqa-diamond]] 87.8788%×1.0, [[humanitys-last-exam]] 27.6182%×1.0 |
| 코딩 | 64.6 | +0.97 | 실측 | [[scicode]] 49.4213%×1.0 |
| 에이전트 | 65.9 | +1.06 | 실측 | [[gdpval]] 1420.76 Elo×1.0, [[tau3-banking]] 38.1443%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 80.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
