---
type: Model
title: Mistral Large 2 (Nov)
creator: Mistral
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: 123
is_reasoning: false
radar:
  knowledge: { s: 28.8, z: -0.58, r: 41.3, estimated: false }  # 전문 지식
  reasoning: { s: 16.3, z: -0.9, r: 36.4, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.81, r: 37.9, estimated: false }  # 코딩
  agentic: { s: 20.2, z: -0.66, r: 40.1, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.3, r: 54.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.1, z: -0.71, r: 39.4, estimated: true }  # 긴문맥
  instruction: { s: 26.8, z: -1.08, r: 33.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Mistral Large 2 (Nov)

Mistral · Open · Medium(123B) · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.3 | -0.58 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 49.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 36.4 | -0.9 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 37.9 | -0.81 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 40.1 | -0.66 | 실측 | [[tau2-bench]] 31.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 54.5 | +0.3 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.4 | -0.71 | 추정 | (추정) |
| 지시 따르기 | 33.8 | -1.08 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
