---
type: Model
title: GPT-5.1 (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 96.5070813670163
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.3, z: 1.0, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.9, z: 0.58, r: 58.7, estimated: false }  # 추론
  coding: { s: 69.0, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 59.2, z: 0.43, r: 56.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.3, z: 0.51, r: 57.6, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.0, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 85.3, z: 1.45, r: 71.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5.1 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 96.5070813670163 t/s · TTFT 37.1807373789766s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +1.0 | 실측 | [[gpqa-diamond]] 87.2727%×0.4, [[humanitys-last-exam]] 28.4986%×0.3 |
| 추론 | 58.7 | +0.58 | 실측 | [[critpt]] 4.85714%×1.0, [[gpqa-diamond]] 87.2727%×1.0, [[humanitys-last-exam]] 28.4986%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[terminal-bench]] 45.4545%×0.5 |
| 에이전트 | 56.4 | +0.43 | 실측 | [[gdpval]] 833.9 Elo×1.0, [[tau2-bench]] 81.8713%×1.0, [[tau3-banking]] 15.8763%×1.0, [[terminal-bench]] 45.4545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.6 | +0.51 | 실측 | [[mmmu-pro]] 75.4913%×1.0 |
| 긴문맥 | 64.9 | +1.0 | 실측 | [[aa-lcr]] 80%×1.0 |
| 지시 따르기 | 71.7 | +1.45 | 실측 | [[ifbench]] 72.8571%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
