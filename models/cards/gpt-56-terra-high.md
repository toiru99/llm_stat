---
type: Model
title: GPT-5.6 Terra (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 74.6567409069399
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.7, z: 1.32, r: 69.8, estimated: false }  # 전문 지식
  reasoning: { s: 69.1, z: 1.65, r: 74.8, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 1.05, r: 65.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.1, z: 0.75, r: 61.3, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.82, r: 62.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 74.6567409069399 t/s · TTFT 4.26015023375006s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.8 | +1.32 | 실측 | [[gpqa-diamond]] 89.5959595959596%×0.4, [[humanitys-last-exam]] 38.5078776645042%×0.3 |
| 추론 | 74.8 | +1.65 | 실측 | [[critpt]] 22.8571428571429%×1.0, [[gpqa-diamond]] 89.5959595959596%×1.0, [[humanitys-last-exam]] 38.5078776645042%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 52.4305555555556%×1.0, [[terminal-bench]] 57.5757575757576%×0.5 |
| 에이전트 | 65.7 | +1.05 | 실측 | [[gdpval]] 1388.46%×1.0, [[tau2-bench]] 78.3625730994152%×1.0, [[tau3-banking]] 28.659793814432998%×1.0, [[terminal-bench]] 57.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.3 | +0.75 | 실측 | [[mmmu-pro]] 79.0751445086705%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 77.6666666666667%×1.0 |
| 지시 따르기 | 62.3 | +0.82 | 실측 | [[ifbench]] 64.421768707483%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
