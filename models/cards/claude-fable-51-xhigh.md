---
type: Model
title: Claude Fable 5.1 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 50.0216384248632
price_blended_usd_1m: 7.175
output_speed_tps: 83.45397473603394
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.0, z: 2.01, r: 80.2, estimated: false }  # 전문 지식
  reasoning: { s: 87.6, z: 2.56, r: 88.4, estimated: false }  # 추론
  coding: { s: 88.8, z: 1.65, r: 74.8, estimated: false }  # 코딩
  agentic: { s: 91.8, z: 1.62, r: 74.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 80.5, z: 1.11, r: 66.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Claude Fable 5.1 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0216384248632** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · 83.45397473603394 t/s · TTFT 66.38680148097218s · 1M ctx` · 가성비 7.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.2 | +2.01 | 실측 | [[gpqa-diamond]] 93.4343434343434%×0.4, [[humanitys-last-exam]] 58.7117701575533%×0.3 |
| 추론 | 88.4 | +2.56 | 실측 | [[critpt]] 31.1428571428571%×1.0, [[gpqa-diamond]] 93.4343434343434%×1.0, [[humanitys-last-exam]] 58.7117701575533%×1.0 |
| 코딩 | 74.8 | +1.65 | 실측 | [[scicode]] 60.8796296296296%×1.0 |
| 에이전트 | 74.3 | +1.62 | 실측 | [[gdpval]] 1740.62%×1.0, [[tau3-banking]] 45.7731958762887%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 66.7 | +1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
