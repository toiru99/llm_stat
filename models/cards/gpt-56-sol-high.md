---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 3.08
output_speed_tps: 71.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.9, z: 2.13, r: 82.0, estimated: false }  # 전문 지식
  reasoning: { s: 84.3, z: 2.27, r: 84.1, estimated: false }  # 추론
  coding: { s: 88.0, z: 1.83, r: 77.5, estimated: false }  # 코딩
  agentic: { s: 80.9, z: 1.65, r: 74.8, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.07, r: 66.1, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.1, r: 66.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **42.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 71.0 t/s · TTFT 14.72s · 1M ctx` · 가성비 13.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.0 | +2.13 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 84.1 | +2.27 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 77.5 | +1.83 | 실측 | [[scicode]] 58.0%×1.0, [[terminal-bench]] 62.0%×0.5 |
| 에이전트 | 74.8 | +1.65 | 실측 | [[gdpval]] 49.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 37.0%×1.0, [[terminal-bench]] 62.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 66.1 | +1.07 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 66.6 | +1.1 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
