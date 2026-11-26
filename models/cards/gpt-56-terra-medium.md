---
type: Model
title: GPT-5.6 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 85.5546290975717
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 1.13, r: 66.9, estimated: false }  # 전문 지식
  reasoning: { s: 60.8, z: 1.27, r: 69.1, estimated: false }  # 추론
  coding: { s: 71.6, z: 1.03, r: 65.5, estimated: false }  # 코딩
  agentic: { s: 65.6, z: 0.65, r: 59.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.0, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 83.5, z: 0.79, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 70.3, z: 0.83, r: 62.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5.6 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 85.5546290975717 t/s · TTFT 2.91138065525759s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.9 | +1.13 | 실측 | [[gpqa-diamond]] 87.1717%×0.4, [[humanitys-last-exam]] 33.2715%×0.3 |
| 추론 | 69.1 | +1.27 | 실측 | [[critpt]] 17.4286%×1.0, [[gpqa-diamond]] 87.1717%×1.0, [[humanitys-last-exam]] 33.2715%×1.0 |
| 코딩 | 65.5 | +1.03 | 실측 | [[scicode]] 50.463%×1.0 |
| 에이전트 | 59.8 | +0.65 | 실측 | [[gdpval]] 1273.41 Elo×1.0, [[tau2-bench]] 72.807%×1.0, [[tau3-banking]] 25.567%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 76.763%×1.0 |
| 긴문맥 | 61.8 | +0.79 | 실측 | [[aa-lcr]] 74%×1.0 |
| 지시 따르기 | 62.4 | +0.83 | 실측 | [[ifbench]] 62.1769%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
