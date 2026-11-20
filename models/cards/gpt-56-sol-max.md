---
type: Model
title: GPT-5.6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 94.556829510305
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.1, z: 1.77, r: 76.6, estimated: false }  # 전문 지식
  reasoning: { s: 84.7, z: 2.42, r: 86.3, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.64, r: 74.6, estimated: false }  # 코딩
  agentic: { s: 90.3, z: 1.57, r: 73.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.9, z: 1.05, r: 65.7, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 85.0, z: 1.3, r: 69.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-5.6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 94.556829510305 t/s · TTFT 45.6371791386333s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.6 | +1.77 | 실측 | [[gpqa-diamond]] 94.1414141414141%×0.4, [[humanitys-last-exam]] 49.4902687673772%×0.3 |
| 추론 | 86.3 | +2.42 | 실측 | [[critpt]] 32.2857142857143%×1.0, [[gpqa-diamond]] 94.1414141414141%×1.0, [[humanitys-last-exam]] 49.4902687673772%×1.0 |
| 코딩 | 74.6 | +1.64 | 실측 | [[scicode]] 57.0601851851852%×1.0, [[terminal-bench]] 65.90909090909089%×0.5 |
| 에이전트 | 73.6 | +1.57 | 실측 | [[gdpval]] 1618.66%×1.0, [[tau2-bench]] 85.0877192982456%×1.0, [[tau3-banking]] 44.3298969072165%×1.0, [[terminal-bench]] 65.90909090909089%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.7 | +1.05 | 실측 | [[mmmu-pro]] 83.4104046242775%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 69.5 | +1.3 | 실측 | [[ifbench]] 72.6530612244898%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
