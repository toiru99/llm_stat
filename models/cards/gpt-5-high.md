---
type: Model
title: GPT-5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: None
output_speed_tps: 97.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.0, z: 1.31, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 52.7, z: 0.92, r: 63.8, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.73, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 59.3, z: 0.89, r: 63.4, estimated: false }  # 에이전트
  trust: { s: 19.5, z: -0.41, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.61, r: 59.1, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.5, r: 72.4, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.36, r: 70.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# GPT-5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $None/1M · 97.0 t/s · TTFT 72.9s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.31 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 63.8 | +0.92 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 60.9 | +0.73 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 63.4 | +0.89 | 실측 | [[gdpval]] 29.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 20.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 59.1 | +0.61 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 72.4 | +1.5 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 70.3 | +1.36 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
