---
type: Model
title: Mistral Large 2 (Jul)
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 2.4
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 123
is_reasoning: false
radar:
  knowledge: { s: 26.5, z: -0.71, r: 39.3, estimated: false }  # 전문 지식
  reasoning: { s: 23.6, z: -0.59, r: 41.1, estimated: false }  # 추론
  coding: { s: 45.0, z: -0.15, r: 47.7, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.15, r: 47.7, estimated: false }  # 에이전트
  trust: { s: 40.5, z: 0.49, r: 57.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.4, z: -1.45, r: 28.2, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.07, r: 34.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Jul)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Mistral Large 2 (Jul)

Mistral · Open · Medium(123B) · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $2.4/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 2.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.71 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 41.1 | -0.59 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 47.7 | -0.15 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 47.7 | -0.15 | 실측 | [[tau2-bench]] 33.0%×1.0 |
| 신뢰성 | 57.3 | +0.49 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.2 | -1.45 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 34.0 | -1.07 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
