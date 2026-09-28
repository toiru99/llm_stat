---
type: Model
title: GPT-5.5 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 4.35
output_speed_tps: 110.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.1, z: 2.15, r: 82.3, estimated: false }  # 전문 지식
  reasoning: { s: 85.7, z: 2.36, r: 85.3, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.74, r: 76.1, estimated: false }  # 코딩
  agentic: { s: 81.5, z: 1.68, r: 75.2, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.94, r: 64.1, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.51, r: 72.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# GPT-5.5 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 110.0 t/s · TTFT 39.49s · 922k ctx` · 가성비 8.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.3 | +2.15 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 85.3 | +2.36 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 76.1 | +1.74 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 75.2 | +1.68 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 42.0%×1.0, [[itbench]] 46.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 39.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 64.1 | +0.94 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 72.7 | +1.51 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
