---
type: Model
title: GPT-5.4 nano (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.179
output_speed_tps: 159.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.8, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 19.8, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 49.8, z: 0.11, r: 51.7, estimated: false }  # 코딩
  agentic: { s: 27.8, z: -0.37, r: 44.4, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.59, r: 58.8, estimated: false }  # 신뢰성
  multimodal: { s: 40.8, z: -1.46, r: 28.1, estimated: false }  # 멀티모달
  long_context: { s: 33.7, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -0.98, r: 35.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5.4 nano (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 159.0 t/s · TTFT 0.68s · 400k ctx` · 가성비 100.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 51.7 | +0.11 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 44.4 | -0.37 | 실측 | [[gdpval]] 12.0%×1.0, [[itbench]] 13.0%×1.0, [[tau2-bench]] 35.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 58.8 | +0.59 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 28.1 | -1.46 | 실측 | [[mmmu-pro]] 44.0%×1.0 |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 35.3 | -0.98 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
