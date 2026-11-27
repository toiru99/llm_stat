---
type: Model
title: GPT-6.1 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 52.407714202786
price_blended_usd_1m: 1.47
output_speed_tps: 43.5437388360209
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.4, z: 1.15, r: 67.3, estimated: false }  # 전문 지식
  reasoning: { s: 79.6, z: 2.21, r: 83.1, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 86.6, z: 1.39, r: 70.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.1, z: 1.16, r: 67.4, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-6.1 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.407714202786** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 43.5437388360209 t/s · TTFT 67.6541975403555s · 1M ctx` · 가성비 35.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 67.3 | +1.15 | 실측 | [[humanitys-last-exam]] 52.6413%×0.3 |
| 추론 | 83.1 | +2.21 | 실측 | [[critpt]] 31.7143%×1.0, [[humanitys-last-exam]] 52.6413%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 55.6713%×1.0 |
| 에이전트 | 70.8 | +1.39 | 실측 | [[gdpval]] 1562.07 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.4 | +1.16 | 실측 | [[mmmu-pro]] 85.0867%×1.0 |
| 긴문맥 | 64.8 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
