---
type: Model
title: GPT-5.5 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 4.35
output_speed_tps: 88.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.3, z: 2.32, r: 84.8, estimated: false }  # 전문 지식
  reasoning: { s: 88.8, z: 2.59, r: 88.8, estimated: false }  # 추론
  coding: { s: 93.0, z: 1.81, r: 77.2, estimated: false }  # 코딩
  agentic: { s: 83.5, z: 1.79, r: 76.8, estimated: false }  # 에이전트
  trust: { s: 10.5, z: -0.75, r: 38.7, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.34, r: 70.1, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.46, r: 71.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# GPT-5.5 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **56.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 88.0 t/s · TTFT 65.04s · 922k ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.8 | +2.32 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 46.0%×0.3 |
| 추론 | 88.8 | +2.59 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 46.0%×1.0 |
| 코딩 | 77.2 | +1.81 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 76.8 | +1.79 | 실측 | [[apex-agents]] 38.0%×1.0, [[gdpval]] 50.0%×1.0, [[itbench]] 46.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 39.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 38.7 | -0.75 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 70.1 | +1.34 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 71.9 | +1.46 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
