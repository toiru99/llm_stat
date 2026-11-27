---
type: Model
title: Claude Fable 5.1 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 50.0408215056713
price_blended_usd_1m: 7.175
output_speed_tps: 86.5859960902693
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.0, z: 2.05, r: 80.8, estimated: false }  # 전문 지식
  reasoning: { s: 87.6, z: 2.6, r: 89.1, estimated: false }  # 추론
  coding: { s: 88.8, z: 1.61, r: 74.1, estimated: false }  # 코딩
  agentic: { s: 91.8, z: 1.57, r: 73.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Claude Fable 5.1 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0408215056713** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 86.5859960902693 t/s · TTFT 56.257836945737s · 1M ctx` · 가성비 7.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 80.8 | +2.05 | 실측 | [[gpqa-diamond]] 93.4343%×0.4, [[humanitys-last-exam]] 58.7118%×0.3 |
| 추론 | 89.1 | +2.6 | 실측 | [[critpt]] 31.1429%×1.0, [[gpqa-diamond]] 93.4343%×1.0, [[humanitys-last-exam]] 58.7118%×1.0 |
| 코딩 | 74.1 | +1.61 | 실측 | [[scicode]] 60.8796%×1.0 |
| 에이전트 | 73.6 | +1.57 | 실측 | [[gdpval]] 1741.37 Elo×1.0, [[tau3-banking]] 45.7732%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
