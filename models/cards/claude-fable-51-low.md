---
type: Model
title: Claude Fable 5.1 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 38.683648810734
price_blended_usd_1m: 7.175
output_speed_tps: 84.7201980931769
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.7, z: 1.6, r: 74.0, estimated: false }  # 전문 지식
  reasoning: { s: 77.8, z: 2.12, r: 81.8, estimated: false }  # 추론
  coding: { s: 81.9, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 79.3, z: 1.13, r: 67.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Fable 5.1 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.683648810734** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 84.7201980931769 t/s · TTFT 2.75786199394447s · 1M ctx` · 가성비 5.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 74.0 | +1.6 | 실측 | [[gpqa-diamond]] 88.0808%×0.4, [[humanitys-last-exam]] 48.8879%×0.3 |
| 추론 | 81.8 | +2.12 | 실측 | [[critpt]] 27.7143%×1.0, [[gpqa-diamond]] 88.0808%×1.0, [[humanitys-last-exam]] 48.8879%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 56.713%×1.0 |
| 에이전트 | 67.0 | +1.13 | 실측 | [[gdpval]] 1474.92 Elo×1.0, [[tau3-banking]] 38.9691%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
