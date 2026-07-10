---
type: Model
title: GPT-5.4 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 2.17
output_speed_tps: 96.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.81, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 33.2, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 71.4, z: 1.09, r: 66.3, estimated: false }  # 코딩
  agentic: { s: 46.5, z: 0.41, r: 56.1, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.42, r: 43.7, estimated: false }  # 신뢰성
  multimodal: { s: 81.2, z: 0.46, r: 57.0, estimated: false }  # 멀티모달
  long_context: { s: 61.8, z: 0.4, r: 56.0, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.06, r: 49.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# GPT-5.4 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.17/1M · 96.0 t/s · TTFT 0.71s · 1M ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.81 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 66.3 | +1.09 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 56.1 | +0.41 | 실측 | [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 43.7 | -0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 57.0 | +0.46 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 56.0 | +0.4 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 49.1 | -0.06 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
