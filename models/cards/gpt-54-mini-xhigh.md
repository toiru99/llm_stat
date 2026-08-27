---
type: Model
title: GPT-5.4 mini (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.6525
output_speed_tps: 164.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.2, z: 1.04, r: 65.6, estimated: false }  # 전문 지식
  reasoning: { s: 57.3, z: 1.04, r: 65.6, estimated: false }  # 추론
  coding: { s: 81.8, z: 1.35, r: 70.2, estimated: false }  # 코딩
  agentic: { s: 63.9, z: 1.03, r: 65.4, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.82, r: 37.7, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.49, r: 57.4, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.28, r: 69.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5.4 mini (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **41.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 164.0 t/s · TTFT 4.23s · 400k ctx` · 가성비 62.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.6 | +1.04 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 65.6 | +1.04 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 70.2 | +1.35 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 65.4 | +1.03 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 35.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 37.7 | -0.82 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 57.4 | +0.49 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 69.3 | +1.28 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
