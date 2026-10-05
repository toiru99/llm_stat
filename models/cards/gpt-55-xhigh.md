---
type: Model
title: GPT-5.5 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 4.35
output_speed_tps: 85.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.1, z: 2.06, r: 80.9, estimated: false }  # 전문 지식
  reasoning: { s: 85.7, z: 2.23, r: 83.5, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.67, r: 75.1, estimated: false }  # 코딩
  agentic: { s: 81.5, z: 1.63, r: 74.4, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.8, r: 38.0, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.49, r: 72.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# GPT-5.5 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 85.0 t/s · TTFT 52.31s · 922k ctx` · 가성비 8.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.9 | +2.06 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 83.5 | +2.23 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 75.1 | +1.67 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 74.4 | +1.63 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 42.0%×1.0, [[itbench]] 46.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 39.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 38.0 | -0.8 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 72.4 | +1.49 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
