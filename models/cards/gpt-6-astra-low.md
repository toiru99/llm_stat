---
type: Model
title: GPT-6 Astra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 43.3349823228524
price_blended_usd_1m: 7.7
output_speed_tps: 51.1047979390487
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.3, z: 1.73, r: 76.0, estimated: false }  # 전문 지식
  reasoning: { s: 78.6, z: 2.12, r: 81.8, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 70.9, z: 0.9, r: 63.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.5, z: 1.13, r: 66.9, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.16, r: 67.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-6 Astra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.3349823228524** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 51.1047979390487 t/s · TTFT 2.84864112900925s · 1M ctx` · 가성비 5.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.0 | +1.73 | 실측 | [[gpqa-diamond]] 93.13131313131309%×0.4, [[humanitys-last-exam]] 49.2122335495829%×0.3 |
| 추론 | 81.8 | +2.12 | 실측 | [[critpt]] 26.285714285714302%×1.0, [[gpqa-diamond]] 93.13131313131309%×1.0, [[humanitys-last-exam]] 49.2122335495829%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 54.050925925925895%×1.0 |
| 에이전트 | 63.5 | +0.9 | 실측 | [[gdpval]] 1404.49%×1.0, [[tau3-banking]] 31.958762886597903%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.9 | +1.13 | 실측 | [[mmmu-pro]] 84.6242774566474%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.4 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
