---
type: Model
title: Grok 4.6 (xhigh)
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.028795176621
price_blended_usd_1m: 1.35
output_speed_tps: 71.8541531526855
context_window: 500000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.5, z: 1.64, r: 74.6, estimated: false }  # 전문 지식
  reasoning: { s: 70.3, z: 1.74, r: 76.2, estimated: false }  # 추론
  coding: { s: 75.8, z: 1.17, r: 67.6, estimated: false }  # 코딩
  agentic: { s: 87.6, z: 1.43, r: 71.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.03, r: 65.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.6 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Grok 4.6 (xhigh)

SpaceXAI · Proprietary · Unknown · 컨텍스트 500k · 종합지능 **31.028795176621** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.35/1M · 71.8541531526855 t/s · TTFT 29.343416001625s · 500k ctx` · 가성비 23.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 74.6 | +1.64 | 실측 | [[gpqa-diamond]] 93.5354%×0.4, [[humanitys-last-exam]] 44.0686%×0.3 |
| 추론 | 76.2 | +1.74 | 실측 | [[critpt]] 19.7143%×1.0, [[gpqa-diamond]] 93.5354%×1.0, [[humanitys-last-exam]] 44.0686%×1.0 |
| 코딩 | 67.6 | +1.17 | 실측 | [[scicode]] 53.0093%×1.0 |
| 에이전트 | 71.4 | +1.43 | 실측 | [[gdpval]] 1658.55 Elo×1.0, [[tau3-banking]] 43.299%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.5 | +1.03 | 실측 | [[aa-lcr]] 81%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
