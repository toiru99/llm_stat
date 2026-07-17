---
type: Model
title: GPT-5.4 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 51.0
price_blended_usd_1m: 2.17
output_speed_tps: 151.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.9, z: 2.14, r: 82.1, estimated: false }  # 전문 지식
  reasoning: { s: 82.8, z: 2.58, r: 88.7, estimated: false }  # 추론
  coding: { s: 92.6, z: 1.95, r: 79.3, estimated: false }  # 코딩
  agentic: { s: 81.5, z: 1.76, r: 76.3, estimated: false }  # 에이전트
  trust: { s: 11.8, z: -0.76, r: 38.6, estimated: false }  # 신뢰성
  multimodal: { s: 91.3, z: 0.94, r: 64.1, estimated: false }  # 멀티모달
  long_context: { s: 97.4, z: 1.44, r: 71.6, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.44, r: 71.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# GPT-5.4 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.17/1M · 151.0 t/s · TTFT 110.42s · 1M ctx` · 가성비 23.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.1 | +2.14 | 실측 | [[aa-omniscience]] 50.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 88.7 | +2.58 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 79.3 | +1.95 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 76.3 | +1.76 | 실측 | [[apex-agents]] 33.0%×1.0, [[gdpval]] 45.0%×1.0, [[tau2-bench]] 87.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 38.6 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 64.1 | +0.94 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 71.6 | +1.44 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 71.6 | +1.44 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
