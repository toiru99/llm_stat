---
type: Model
title: GPT-5.4 nano (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: None
output_speed_tps: 160.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.2, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 54.0, z: 0.98, r: 64.7, estimated: false }  # 추론
  coding: { s: 73.4, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 56.7, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: 28.7, z: 0.03, r: 50.4, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.01, r: 49.8, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.53, r: 73.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-31
timestamp: 2026-07-31T00:00:00Z
---

# GPT-5.4 nano (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $None/1M · 160.0 t/s · TTFT 3.66s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 64.7 | +0.98 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[apex-agents]] 25.0%×1.0, [[gdpval]] 30.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 50.4 | +0.03 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 49.8 | -0.01 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 73.0 | +1.53 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
