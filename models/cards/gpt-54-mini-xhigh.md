---
type: Model
title: GPT-5.4 mini (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.6525
output_speed_tps: 175.248260467913
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.2, z: 0.99, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 51.6, z: 0.82, r: 62.3, estimated: false }  # 추론
  coding: { s: 76.0, z: 1.18, r: 67.7, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 0.77, r: 61.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.36, r: 55.4, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.47, r: 72.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.4 mini (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 175.248260467913 t/s · TTFT 98.6970608408917s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +0.99 | 실측 | [[gpqa-diamond]] 87.4747%×0.4, [[humanitys-last-exam]] 28.1279%×0.3 |
| 추론 | 62.3 | +0.82 | 실측 | [[critpt]] 10%×1.0, [[gpqa-diamond]] 87.4747%×1.0, [[humanitys-last-exam]] 28.1279%×1.0 |
| 코딩 | 67.7 | +1.18 | 실측 | [[scicode]] 52.0833%×1.0, [[terminal-bench]] 52.2727%×0.5 |
| 에이전트 | 61.5 | +0.77 | 실측 | [[gdpval]] 1021.13 Elo×1.0, [[tau2-bench]] 83.3333%×1.0, [[tau3-banking]] 25.567%×1.0, [[terminal-bench]] 52.2727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.4 | +0.36 | 실측 | [[mmmu-pro]] 73.2948%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 77%×1.0 |
| 지시 따르기 | 72.1 | +1.47 | 실측 | [[ifbench]] 73.2653%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
