---
type: Model
title: Magistral Small 1.2
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.6
output_speed_tps: 56.8367676079573
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.5, z: -0.33, r: 45.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.13, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 15.4, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.7, z: -0.85, r: 37.2, estimated: false }  # 멀티모달
  long_context: { s: 21.8, z: -0.95, r: 35.8, estimated: false }  # 긴문맥
  instruction: { s: 45.3, z: -0.36, r: 44.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Magistral Small 1.2

Mistral · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · 56.8367676079573 t/s · TTFT 4.67571119534503s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.0 | -0.33 | 실측 | [[gpqa-diamond]] 66.2626262626263%×0.4, [[humanitys-last-exam]] 6.44114921223355%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 66.2626262626263%×1.0, [[humanitys-last-exam]] 6.44114921223355%×1.0 |
| 코딩 | 33.1 | -1.13 | 실측 | [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[gdpval]] 11.25%×1.0, [[tau2-bench]] 27.7777777777778%×1.0, [[tau3-banking]] 4.5360824742267996%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.2 | -0.85 | 실측 | [[mmmu-pro]] 55.4913294797688%×1.0 |
| 긴문맥 | 35.8 | -0.95 | 실측 | [[aa-lcr]] 19.3333333333333%×1.0 |
| 지시 따르기 | 44.6 | -0.36 | 실측 | [[ifbench]] 44.353741496598595%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
