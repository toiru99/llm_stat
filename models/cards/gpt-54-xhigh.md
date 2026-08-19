---
type: Model
title: GPT-5.4 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 2.175
output_speed_tps: 131.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.7, z: 1.97, r: 79.6, estimated: false }  # 전문 지식
  reasoning: { s: 82.7, z: 2.3, r: 84.6, estimated: false }  # 추론
  coding: { s: 92.6, z: 1.81, r: 77.2, estimated: false }  # 코딩
  agentic: { s: 78.2, z: 1.62, r: 74.3, estimated: false }  # 에이전트
  trust: { s: 7.0, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.85, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.31, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.34, r: 70.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# GPT-5.4 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 131.0 t/s · TTFT 144.08s · 1M ctx` · 가성비 24.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.6 | +1.97 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 84.6 | +2.3 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 77.2 | +1.81 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 74.3 | +1.62 | 실측 | [[apex-agents]] 33.0%×1.0, [[gdpval]] 45.0%×1.0, [[tau2-bench]] 87.0%×1.0, [[tau3-banking]] 40.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 62.7 | +0.85 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 69.7 | +1.31 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 70.1 | +1.34 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
