---
type: Model
title: GPT-5.6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 94.1053499839997
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.8, z: -0.36, r: 44.5, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.51, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 38.6, z: -0.22, r: 46.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.1, z: -0.52, r: 42.1, estimated: false }  # 멀티모달
  long_context: { s: 48.1, z: -0.16, r: 47.6, estimated: false }  # 긴문맥
  instruction: { s: 49.1, z: -0.2, r: 47.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-5.6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 94.1053499839997 t/s · TTFT 1.44470182490363s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.5 | -0.36 | 실측 | [[gpqa-diamond]] 64.54545454545459%×0.4, [[humanitys-last-exam]] 7.228915662650599%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 64.54545454545459%×1.0, [[humanitys-last-exam]] 7.228915662650599%×1.0 |
| 코딩 | 57.7 | +0.51 | 실측 | [[scicode]] 40.3935185185185%×1.0 |
| 에이전트 | 46.7 | -0.22 | 실측 | [[gdpval]] 928.04%×1.0, [[tau3-banking]] 9.69072164948454%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.1 | -0.52 | 실측 | [[mmmu-pro]] 60.346820809248605%×1.0 |
| 긴문맥 | 47.6 | -0.16 | 실측 | [[aa-lcr]] 42.6666666666667%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
