---
type: Model
title: Qwen3.7 Max
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.6
output_speed_tps: 155.0112157781595
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.6, z: 1.48, r: 72.2, estimated: false }  # 전문 지식
  reasoning: { s: 62.3, z: 1.33, r: 70.0, estimated: false }  # 추론
  coding: { s: 72.4, z: 1.11, r: 66.7, estimated: false }  # 코딩
  agentic: { s: 65.7, z: 0.73, r: 61.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 96.1, z: 1.77, r: 76.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3.7 Max

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $7.5 · 혼합 $1.6/1M · 155.0112157781595 t/s · TTFT 2.480794043966664s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.2 | +1.48 | 실측 | [[gpqa-diamond]] 92.32323232323229%×0.4, [[humanitys-last-exam]] 40.5004633920297%×0.3 |
| 추론 | 70.0 | +1.33 | 실측 | [[critpt]] 13.4285714285714%×1.0, [[gpqa-diamond]] 92.32323232323229%×1.0, [[humanitys-last-exam]] 40.5004633920297%×1.0 |
| 코딩 | 66.7 | +1.11 | 실측 | [[scicode]] 49.537037037037%×1.0, [[terminal-bench]] 50.7575757575758%×0.5 |
| 에이전트 | 61.0 | +0.73 | 실측 | [[gdpval]] 1134.32%×1.0, [[tau2-bench]] 94.7368421052632%×1.0, [[tau3-banking]] 11.7525773195876%×1.0, [[terminal-bench]] 50.7575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 76.6 | +1.77 | 실측 | [[ifbench]] 80.5442176870748%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
