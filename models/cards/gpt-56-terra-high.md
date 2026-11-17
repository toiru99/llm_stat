---
type: Model
title: GPT-5.6 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 92.3556900978591
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.7, z: 1.33, r: 70.0, estimated: false }  # 전문 지식
  reasoning: { s: 69.1, z: 1.67, r: 75.1, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.34, r: 70.1, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 1.06, r: 65.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.4, z: 0.77, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.83, r: 62.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 92.3556900978591 t/s · TTFT 7.0691216435999396s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.0 | +1.33 | 실측 | [[gpqa-diamond]] 89.5959595959596%×0.4, [[humanitys-last-exam]] 38.5078776645042%×0.3 |
| 추론 | 75.1 | +1.67 | 실측 | [[critpt]] 22.8571428571429%×1.0, [[gpqa-diamond]] 89.5959595959596%×1.0, [[humanitys-last-exam]] 38.5078776645042%×1.0 |
| 코딩 | 70.1 | +1.34 | 실측 | [[scicode]] 52.4305555555556%×1.0, [[terminal-bench]] 57.5757575757576%×0.5 |
| 에이전트 | 65.9 | +1.06 | 실측 | [[gdpval]] 1388.46%×1.0, [[tau2-bench]] 78.3625730994152%×1.0, [[tau3-banking]] 28.659793814432998%×1.0, [[terminal-bench]] 57.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.6 | +0.77 | 실측 | [[mmmu-pro]] 79.0751445086705%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 77.6666666666667%×1.0 |
| 지시 따르기 | 62.4 | +0.83 | 실측 | [[ifbench]] 64.421768707483%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
