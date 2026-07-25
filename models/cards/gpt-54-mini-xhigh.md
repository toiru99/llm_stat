---
type: Model
title: GPT-5.4 mini (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: 175.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.7, z: 1.15, r: 67.3, estimated: false }  # 전문 지식
  reasoning: { s: 57.6, z: 1.17, r: 67.6, estimated: false }  # 추론
  coding: { s: 81.8, z: 1.46, r: 71.9, estimated: false }  # 코딩
  agentic: { s: 65.9, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.55, r: 58.2, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.36, r: 70.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# GPT-5.4 mini (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $None/1M · 175.0 t/s · TTFT 12.23s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.3 | +1.15 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 67.6 | +1.17 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 71.9 | +1.46 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 35.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 58.2 | +0.55 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 70.3 | +1.36 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
