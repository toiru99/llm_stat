---
type: Model
title: GPT-5.6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 109.842684920123
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.1, z: 1.72, r: 75.8, estimated: false }  # 전문 지식
  reasoning: { s: 79.8, z: 2.22, r: 83.3, estimated: false }  # 추론
  coding: { s: 86.0, z: 1.52, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 85.0, z: 1.33, r: 70.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.9, z: 1.0, r: 64.9, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 82.7, z: 1.34, r: 70.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-5.6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 109.842684920123 t/s · TTFT 14.2209646626055s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 75.8 | +1.72 | 실측 | [[gpqa-diamond]] 93.1313%×0.4, [[humanitys-last-exam]] 47.3123%×0.3 |
| 추론 | 83.3 | +2.22 | 실측 | [[critpt]] 28.5714%×1.0, [[gpqa-diamond]] 93.1313%×1.0, [[humanitys-last-exam]] 47.3123%×1.0 |
| 코딩 | 72.7 | +1.52 | 실측 | [[scicode]] 57.0602%×1.0, [[terminal-bench]] 61.3636%×0.5 |
| 에이전트 | 70.0 | +1.33 | 실측 | [[gdpval]] 1577.26 Elo×1.0, [[tau2-bench]] 84.7953%×1.0, [[tau3-banking]] 38.1443%×1.0, [[terminal-bench]] 61.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.9 | +1.0 | 실측 | [[mmmu-pro]] 82.659%×1.0 |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | 70.1 | +1.34 | 실측 | [[ifbench]] 71.0204%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
