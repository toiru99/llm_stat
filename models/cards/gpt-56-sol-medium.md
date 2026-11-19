---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 95.4853577070046
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.8, z: 1.52, r: 72.8, estimated: false }  # 전문 지식
  reasoning: { s: 72.0, z: 1.8, r: 76.9, estimated: false }  # 추론
  coding: { s: 87.2, z: 1.6, r: 74.0, estimated: false }  # 코딩
  agentic: { s: 82.2, z: 1.29, r: 69.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.2, z: 0.91, r: 63.6, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 80.7, z: 1.12, r: 66.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 95.4853577070046 t/s · TTFT 5.10815407462625s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.8 | +1.52 | 실측 | [[gpqa-diamond]] 92.6262626262626%×0.4, [[humanitys-last-exam]] 42.2150139017609%×0.3 |
| 추론 | 76.9 | +1.8 | 실측 | [[critpt]] 22.8571428571429%×1.0, [[gpqa-diamond]] 92.6262626262626%×1.0, [[humanitys-last-exam]] 42.2150139017609%×1.0 |
| 코딩 | 74.0 | +1.6 | 실측 | [[scicode]] 57.4074074074074%×1.0, [[terminal-bench]] 62.878787878787904%×0.5 |
| 에이전트 | 69.4 | +1.29 | 실측 | [[gdpval]] 1432.83%×1.0, [[tau2-bench]] 80.9941520467836%×1.0, [[tau3-banking]] 36.4948453608247%×1.0, [[terminal-bench]] 62.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.6 | +0.91 | 실측 | [[mmmu-pro]] 81.38728323699421%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 66.8 | +1.12 | 실측 | [[ifbench]] 69.5918367346939%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
