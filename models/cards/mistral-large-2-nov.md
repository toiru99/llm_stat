---
type: Model
title: Mistral Large 2 (Nov)
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.9, z: -0.97, r: 35.5, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 9.3, z: -0.95, r: 35.7, estimated: false }  # 코딩
  agentic: { s: 9.3, z: -0.87, r: 37.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.8, r: 38.0, estimated: true }  # 긴문맥
  instruction: { s: 26.8, z: -1.12, r: 33.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Mistral Large 2 (Nov)

Mistral · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.97 | 실측 | [[gpqa-diamond]] 48.6%×0.4, [[humanitys-last-exam]] 3.3%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[gpqa-diamond]] 48.6%×1.0, [[humanitys-last-exam]] 3.3%×1.0 |
| 코딩 | 35.7 | -0.95 | 실측 | [[terminal-bench]] 6.1%×0.5 |
| 에이전트 | 37.0 | -0.87 | 실측 | [[terminal-bench]] 6.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.0 | -0.8 | 추정 | (추정) |
| 지시 따르기 | 33.2 | -1.12 | 실측 | [[ifbench]] 31.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
