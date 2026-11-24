---
type: Model
title: Claude Fable 5.1 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 49.1602124158081
price_blended_usd_1m: 7.175
output_speed_tps: 86.2187307533564
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.5, z: 2.07, r: 81.1, estimated: false }  # 전문 지식
  reasoning: { s: 86.5, z: 2.55, r: 88.3, estimated: false }  # 추론
  coding: { s: 92.4, z: 1.73, r: 76.0, estimated: false }  # 코딩
  agentic: { s: 93.7, z: 1.64, r: 74.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 96.2, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Fable 5.1 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.1602124158081** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 86.2187307533564 t/s · TTFT 140.79308642508s · 1M ctx` · 가성비 6.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 81.1 | +2.07 | 실측 | [[gpqa-diamond]] 93.7374%×0.4, [[humanitys-last-exam]] 59.1288%×0.3 |
| 추론 | 88.3 | +2.55 | 실측 | [[critpt]] 29.7143%×1.0, [[gpqa-diamond]] 93.7374%×1.0, [[humanitys-last-exam]] 59.1288%×1.0 |
| 코딩 | 76.0 | +1.73 | 실측 | [[scicode]] 63.0787%×1.0 |
| 에이전트 | 74.7 | +1.64 | 실측 | [[gdpval]] 1764.5 Elo×1.0, [[tau3-banking]] 47.2165%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 85.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
