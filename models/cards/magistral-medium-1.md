---
type: Model
title: Magistral Medium 1
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 40000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.5, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 39.5, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 13.8, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 13.8, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.2, estimated: false }  # 긴문맥
  instruction: { s: 18.3, z: -1.49, r: 27.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Medium 1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Magistral Medium 1

Mistral · Proprietary · Unknown · 컨텍스트 40k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 40k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 67.9%×0.4, [[humanitys-last-exam]] 9.8%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[gpqa-diamond]] 67.9%×1.0, [[humanitys-last-exam]] 9.8%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[terminal-bench]] 9.1%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[terminal-bench]] 9.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.2 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.7 | -1.49 | 실측 | [[ifbench]] 25.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
