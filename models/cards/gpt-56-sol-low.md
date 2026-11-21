---
type: Model
title: GPT-5.6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 87.4712754410874
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 75.3, z: 1.35, r: 70.2, estimated: false }  # 전문 지식
  reasoning: { s: 62.2, z: 1.31, r: 69.7, estimated: false }  # 추론
  coding: { s: 84.9, z: 1.52, r: 72.8, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 1.05, r: 65.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.7, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 76.4, z: 0.94, r: 64.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-5.6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 87.4712754410874 t/s · TTFT 3.13079571586669s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.2 | +1.35 | 실측 | [[gpqa-diamond]] 89.79797979797979%×0.4, [[humanitys-last-exam]] 39.3883225208526%×0.3 |
| 추론 | 69.7 | +1.31 | 실측 | [[critpt]] 14.857142857142899%×1.0, [[gpqa-diamond]] 89.79797979797979%×1.0, [[humanitys-last-exam]] 39.3883225208526%×1.0 |
| 코딩 | 72.8 | +1.52 | 실측 | [[scicode]] 56.3657407407407%×1.0, [[terminal-bench]] 60.606060606060595%×0.5 |
| 에이전트 | 65.7 | +1.05 | 실측 | [[gdpval]] 1313.12%×1.0, [[tau2-bench]] 76.0233918128655%×1.0, [[tau3-banking]] 29.0721649484536%×1.0, [[terminal-bench]] 60.606060606060595%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.9826589595376%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 실측 | [[ifbench]] 66.53061224489801%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
