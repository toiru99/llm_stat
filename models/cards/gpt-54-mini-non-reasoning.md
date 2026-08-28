---
type: Model
title: GPT-5.4 mini (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 0.6525
output_speed_tps: 154.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.3, z: -0.07, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.1, z: -0.58, r: 41.4, estimated: false }  # 추론
  coding: { s: 53.5, z: 0.25, r: 53.8, estimated: false }  # 코딩
  agentic: { s: 26.5, z: -0.41, r: 43.9, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.04, r: 34.3, estimated: false }  # 신뢰성
  multimodal: { s: 64.3, z: -0.33, r: 45.1, estimated: false }  # 멀티모달
  long_context: { s: 42.2, z: -0.22, r: 46.7, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.6, r: 41.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# GPT-5.4 mini (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 154.0 t/s · TTFT 0.79s · 400k ctx` · 가성비 26.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.07 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 41.4 | -0.58 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 53.8 | +0.25 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 43.9 | -0.41 | 실측 | [[gdpval]] 15.0%×1.0, [[itbench]] 19.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 34.3 | -1.04 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | 45.1 | -0.33 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 46.7 | -0.22 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 41.0 | -0.6 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
