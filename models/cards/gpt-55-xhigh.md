---
type: Model
title: GPT-5.5 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 59.3544897747104
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.5, z: 1.69, r: 75.3, estimated: false }  # 전문 지식
  reasoning: { s: 78.0, z: 2.13, r: 81.9, estimated: false }  # 추론
  coding: { s: 84.2, z: 1.46, r: 71.8, estimated: false }  # 코딩
  agentic: { s: 85.0, z: 1.34, r: 70.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.2, z: 0.81, r: 62.1, estimated: false }  # 멀티모달
  long_context: { s: 95.1, z: 1.14, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 89.5, z: 1.62, r: 74.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.5 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 59.3544897747104 t/s · TTFT 28.5066874259027s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 75.3 | +1.69 | 실측 | [[gpqa-diamond]] 93.5354%×0.4, [[humanitys-last-exam]] 45.7831%×0.3 |
| 추론 | 81.9 | +2.13 | 실측 | [[critpt]] 27.1429%×1.0, [[gpqa-diamond]] 93.5354%×1.0, [[humanitys-last-exam]] 45.7831%×1.0 |
| 코딩 | 71.8 | +1.46 | 실측 | [[scicode]] 55.787%×1.0, [[terminal-bench]] 60.6061%×0.5 |
| 에이전트 | 70.0 | +1.34 | 실측 | [[gdpval]] 1357.08 Elo×1.0, [[tau2-bench]] 93.8596%×1.0, [[tau3-banking]] 38.9691%×1.0, [[terminal-bench]] 60.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.1 | +0.81 | 실측 | [[mmmu-pro]] 79.8844%×1.0 |
| 긴문맥 | 67.2 | +1.14 | 실측 | [[aa-lcr]] 84.3333%×1.0 |
| 지시 따르기 | 74.4 | +1.62 | 실측 | [[ifbench]] 75.8503%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
