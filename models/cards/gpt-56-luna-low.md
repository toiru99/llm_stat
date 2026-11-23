---
type: Model
title: GPT-5.6 Luna (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 97.0729488288549
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.7, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 39.4, z: 0.19, r: 52.8, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 43.2, z: -0.06, r: 49.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.3, z: 0.41, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-5.6 Luna (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 97.0729488288549 t/s · TTFT 1.89601296512095s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[gpqa-diamond]] 83.5353535353535%×0.4, [[humanitys-last-exam]] 19.8331788693234%×0.3 |
| 추론 | 52.8 | +0.19 | 실측 | [[critpt]] 2.57142857142857%×1.0, [[gpqa-diamond]] 83.5353535353535%×1.0, [[humanitys-last-exam]] 19.8331788693234%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[scicode]] 46.064814814814795%×1.0 |
| 에이전트 | 49.1 | -0.06 | 실측 | [[gdpval]] 1001.61%×1.0, [[tau3-banking]] 12.7835051546392%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.1 | +0.41 | 실측 | [[mmmu-pro]] 73.9884393063584%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
