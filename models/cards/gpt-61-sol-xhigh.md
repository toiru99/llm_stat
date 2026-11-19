---
type: Model
title: GPT-6.1 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 52.458219253291
price_blended_usd_1m: 1.47
output_speed_tps: 52.0507469242303
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.4, z: 1.11, r: 66.7, estimated: false }  # 전문 지식
  reasoning: { s: 79.6, z: 2.17, r: 82.6, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.36, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 86.6, z: 1.44, r: 71.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.1, z: 1.16, r: 67.4, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 81.6, z: 1.16, r: 67.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GPT-6.1 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.458219253291** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 52.0507469242303 t/s · TTFT 58.7769777608806s · 1M ctx` · 가성비 35.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.7 | +1.11 | 실측 | [[humanitys-last-exam]] 52.6413345690454%×0.3 |
| 추론 | 82.6 | +2.17 | 실측 | [[critpt]] 31.7142857142857%×1.0, [[humanitys-last-exam]] 52.6413345690454%×1.0 |
| 코딩 | 70.5 | +1.36 | 실측 | [[scicode]] 55.671296296296305%×1.0 |
| 에이전트 | 71.7 | +1.44 | 실측 | [[gdpval]] 1562.59%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.4 | +1.16 | 실측 | [[mmmu-pro]] 85.08670520231209%×1.0 |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
