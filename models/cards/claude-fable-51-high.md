---
type: Model
title: Claude Fable 5.1 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 47.174988245604
price_blended_usd_1m: 7.175
output_speed_tps: 88.3430305298775
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.5, z: 1.88, r: 78.3, estimated: false }  # 전문 지식
  reasoning: { s: 84.4, z: 2.45, r: 86.7, estimated: false }  # 추론
  coding: { s: 85.1, z: 1.49, r: 72.3, estimated: false }  # 코딩
  agentic: { s: 87.0, z: 1.4, r: 71.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Fable 5.1 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.174988245604** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 88.3430305298775 t/s · TTFT 7.50127525368147s · 1M ctx` · 가성비 6.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 78.3 | +1.88 | 실측 | [[gpqa-diamond]] 90.6061%×0.4, [[humanitys-last-exam]] 55.9314%×0.3 |
| 추론 | 86.7 | +2.45 | 실측 | [[critpt]] 30.2857%×1.0, [[gpqa-diamond]] 90.6061%×1.0, [[humanitys-last-exam]] 55.9314%×1.0 |
| 코딩 | 72.3 | +1.49 | 실측 | [[scicode]] 58.6806%×1.0 |
| 에이전트 | 71.1 | +1.4 | 실측 | [[gdpval]] 1644.26 Elo×1.0, [[tau3-banking]] 43.0928%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 83.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
