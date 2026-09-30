---
type: Model
title: GPT-5.4 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 2.175
output_speed_tps: 71.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 53.2, z: 0.51, r: 57.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.8, z: -0.2, r: 46.9, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 47.0, z: 0.33, r: 55.0, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.6, r: 41.0, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.29, r: 54.4, estimated: false }  # 멀티모달
  long_context: { s: 65.2, z: 0.42, r: 56.3, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.13, r: 48.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-5.4 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 71.0 t/s · TTFT 0.87s · 1M ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.6 | +0.51 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 46.9 | -0.2 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 55.0 | +0.33 | 실측 | [[tau2-bench]] 36.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 54.4 | +0.29 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 56.3 | +0.42 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 48.0 | -0.13 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
