---
type: Model
title: GPT-5.5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 56.4054903648877
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.2, z: 1.2, r: 68.0, estimated: false }  # 전문 지식
  reasoning: { s: 53.2, z: 0.87, r: 63.0, estimated: false }  # 추론
  coding: { s: 79.3, z: 1.33, r: 70.0, estimated: false }  # 코딩
  agentic: { s: 69.1, z: 0.84, r: 62.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.0, z: 0.75, r: 61.2, estimated: false }  # 멀티모달
  long_context: { s: 91.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.81, r: 62.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-5.5 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 56.4054903648877 t/s · TTFT 2.46720522093816s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.0 | +1.2 | 실측 | [[gpqa-diamond]] 91.010101010101%×0.4, [[humanitys-last-exam]] 32.6691380908248%×0.3 |
| 추론 | 63.0 | +0.87 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.010101010101%×1.0, [[humanitys-last-exam]] 32.6691380908248%×1.0 |
| 코딩 | 70.0 | +1.33 | 실측 | [[terminal-bench]] 52.2727272727273%×0.5 |
| 에이전트 | 62.6 | +0.84 | 실측 | [[gdpval]] 1052.48%×1.0, [[tau2-bench]] 83.9181286549708%×1.0, [[tau3-banking]] 24.9484536082474%×1.0, [[terminal-bench]] 52.2727272727273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.2 | +0.75 | 실측 | [[mmmu-pro]] 79.0173410404624%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 62.2 | +0.81 | 실측 | [[ifbench]] 64.3537414965986%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
