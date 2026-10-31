---
type: Model
title: GPT-5.6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 102.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.1, z: 1.79, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 85.2, z: 1.78, r: 76.7, estimated: false }  # 추론
  coding: { s: 88.9, z: 1.74, r: 76.1, estimated: false }  # 코딩
  agentic: { s: 93.2, z: 2.03, r: 80.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.05, r: 65.7, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.27, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.39, r: 70.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-5.6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 102.0 t/s · TTFT 91.59s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.79 | 실측 | [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 76.7 | +1.78 | 실측 | [[critpt]] 56.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 76.1 | +1.74 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 66.0%×0.5 |
| 에이전트 | 80.4 | +2.03 | 실측 | [[gdpval]] 1618.0%×1.0, [[itbench]] 56.0%×1.0, [[tau3-banking]] 44.0%×1.0, [[terminal-bench]] 66.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.7 | +1.05 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.0 | +1.27 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 70.9 | +1.39 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
