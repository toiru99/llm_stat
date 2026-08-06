---
type: Model
title: GPT-5.5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 4.35
output_speed_tps: 73.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.7, z: 2.32, r: 84.8, estimated: false }  # 전문 지식
  reasoning: { s: 78.4, z: 2.18, r: 82.7, estimated: false }  # 추론
  coding: { s: 88.2, z: 1.69, r: 75.4, estimated: false }  # 코딩
  agentic: { s: 76.9, z: 1.64, r: 74.6, estimated: false }  # 에이전트
  trust: { s: 14.9, z: -0.63, r: 40.5, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.33, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.23, r: 68.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-5.5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **50.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 73.0 t/s · TTFT 9.06s · 922k ctx` · 가성비 11.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.8 | +2.32 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 82.7 | +2.18 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 75.4 | +1.69 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 74.6 | +1.64 | 실측 | [[gdpval]] 44.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 40.5 | -0.63 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 70.0 | +1.33 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
