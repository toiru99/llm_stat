---
type: Model
title: Olmo 3 32B Think
creator: Allen Institute for AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 66000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.9, z: -0.48, r: 42.8, estimated: false }  # 전문 지식
  reasoning: { s: 33.2, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.19, r: 32.2, estimated: false }  # 코딩
  agentic: { s: 2.3, z: -1.1, r: 33.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.2, estimated: false }  # 긴문맥
  instruction: { s: 52.0, z: -0.03, r: 49.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Olmo 3 32B Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Olmo 3 32B Think

Allen Institute for AI · Open · Small · 컨텍스트 66k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 66k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.8 | -0.48 | 실측 | [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 6.4%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 6.4%×1.0 |
| 코딩 | 32.2 | -1.19 | 실측 | [[terminal-bench]] 1.5%×0.5 |
| 에이전트 | 33.5 | -1.1 | 실측 | [[terminal-bench]] 1.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.2 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 49.5 | -0.03 | 실측 | [[ifbench]] 49.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
