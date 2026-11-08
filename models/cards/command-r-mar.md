---
type: Model
title: Command-R (Mar)
creator: Cohere
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.9, z: -1.52, r: 27.2, estimated: false }  # 전문 지식
  reasoning: { s: 13.8, z: -1.42, r: 28.7, estimated: false }  # 추론
  coding: { s: 0.3, z: -1.24, r: 31.4, estimated: true }  # 코딩
  agentic: { s: 0.0, z: -1.18, r: 32.4, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.4, z: -1.54, r: 26.9, estimated: true }  # 긴문맥
  instruction: { s: 17.3, z: -1.51, r: 27.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Command-R (Mar)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Command-R (Mar)

Cohere · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 27.2 | -1.52 | 실측 | [[gpqa-diamond]] 28.4%×0.4, [[humanitys-last-exam]] 4.8%×0.3 |
| 추론 | 28.7 | -1.42 | 실측 | [[gpqa-diamond]] 28.4%×1.0, [[humanitys-last-exam]] 4.8%×1.0 |
| 코딩 | 31.4 | -1.24 | 추정 | (추정) |
| 에이전트 | 32.4 | -1.18 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.9 | -1.54 | 추정 | (추정) |
| 지시 따르기 | 27.3 | -1.51 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
