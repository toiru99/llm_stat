---
type: Model
title: GPT-5.4 mini (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.6525
output_speed_tps: 180.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.0, z: 1.05, r: 65.8, estimated: false }  # 전문 지식
  reasoning: { s: 56.1, z: 1.06, r: 65.8, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.38, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 1.02, r: 65.2, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.4, estimated: false }  # 신뢰성
  multimodal: { s: 81.7, z: 0.55, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.38, r: 70.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5.4 mini (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **41.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 180.0 t/s · TTFT 7.43s · 400k ctx` · 가성비 62.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.8 | +1.05 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 65.8 | +1.06 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 70.8 | +1.38 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 65.2 | +1.02 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 35.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 58.3 | +0.55 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 70.6 | +1.38 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
