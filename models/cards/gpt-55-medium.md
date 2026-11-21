---
type: Model
title: GPT-5.5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 67.9408989917509
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.9, z: 1.52, r: 72.9, estimated: false }  # 전문 지식
  reasoning: { s: 68.1, z: 1.6, r: 74.0, estimated: false }  # 추론
  coding: { s: 81.3, z: 1.4, r: 71.0, estimated: false }  # 코딩
  agentic: { s: 77.6, z: 1.13, r: 67.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.9, z: 0.89, r: 63.4, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 82.6, z: 1.2, r: 68.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-5.5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 67.9408989917509 t/s · TTFT 4.64419996299439s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.9 | +1.52 | 실측 | [[gpqa-diamond]] 92.6262626262626%×0.4, [[humanitys-last-exam]] 42.354031510658004%×0.3 |
| 추론 | 74.0 | +1.6 | 실측 | [[critpt]] 18.5714285714286%×1.0, [[gpqa-diamond]] 92.6262626262626%×1.0, [[humanitys-last-exam]] 42.354031510658004%×1.0 |
| 코딩 | 71.0 | +1.4 | 실측 | [[scicode]] 54.51388888888889%×1.0, [[terminal-bench]] 57.5757575757576%×0.5 |
| 에이전트 | 67.0 | +1.13 | 실측 | [[gdpval]] 1241.98%×1.0, [[tau2-bench]] 91.812865497076%×1.0, [[tau3-banking]] 29.8969072164948%×1.0, [[terminal-bench]] 57.5757575757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.4 | +0.89 | 실측 | [[mmmu-pro]] 81.1560693641619%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 실측 | [[ifbench]] 70.952380952381%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
