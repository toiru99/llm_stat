---
type: Model
title: GPT-5 mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 83.5189141105867
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.2, z: 0.65, r: 59.8, estimated: false }  # 전문 지식
  reasoning: { s: 37.4, z: 0.11, r: 51.7, estimated: false }  # 추론
  coding: { s: 52.0, z: 0.37, r: 55.6, estimated: false }  # 코딩
  agentic: { s: 50.3, z: 0.11, r: 51.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.1, z: 0.14, r: 52.1, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.73, r: 61.0, estimated: false }  # 긴문맥
  instruction: { s: 88.9, z: 1.6, r: 74.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GPT-5 mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 83.5189141105867 t/s · TTFT 56.6995659130528s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 59.8 | +0.65 | 실측 | [[gpqa-diamond]] 82.8283%×0.4, [[humanitys-last-exam]] 21.4551%×0.3 |
| 추론 | 51.7 | +0.11 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 82.8283%×1.0, [[humanitys-last-exam]] 21.4551%×1.0 |
| 코딩 | 55.6 | +0.37 | 실측 | [[scicode]] 39.0046%×1.0, [[terminal-bench]] 33.3333%×0.5 |
| 에이전트 | 51.7 | +0.11 | 실측 | [[gdpval]] 772.97 Elo×1.0, [[tau2-bench]] 68.4211%×1.0, [[tau3-banking]] 15.4639%×1.0, [[terminal-bench]] 33.3333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.1 | +0.14 | 실측 | [[mmmu-pro]] 70.0578%×1.0 |
| 긴문맥 | 61.0 | +0.73 | 실측 | [[aa-lcr]] 72.3333%×1.0 |
| 지시 따르기 | 74.0 | +1.6 | 실측 | [[ifbench]] 75.4422%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
