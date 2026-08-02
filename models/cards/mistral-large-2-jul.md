---
type: Model
title: Mistral Large 2 (Jul)
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 123
is_reasoning: false
radar:
  knowledge: { s: 26.8, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 45.0, z: -0.09, r: 48.7, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.12, r: 48.2, estimated: false }  # 에이전트
  trust: { s: 35.3, z: 0.34, r: 55.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.6, z: -1.39, r: 29.2, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.03, r: 34.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Jul)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Mistral Large 2 (Jul)

Mistral · Open · Medium(123B) · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 48.7 | -0.09 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 48.2 | -0.12 | 실측 | [[tau2-bench]] 33.0%×1.0 |
| 신뢰성 | 55.2 | +0.34 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.2 | -1.39 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 34.5 | -1.03 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
