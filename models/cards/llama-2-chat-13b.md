---
type: Model
title: Llama 2 Chat 13B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4096
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.9, z: -1.47, r: 28.0, estimated: false }  # 전문 지식
  reasoning: { s: 15.4, z: -0.99, r: 35.1, estimated: false }  # 추론
  coding: { s: 0.7, z: -1.34, r: 30.0, estimated: true }  # 코딩
  agentic: { s: 0.9, z: -1.52, r: 27.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.9, z: -1.54, r: 27.0, estimated: true }  # 긴문맥
  instruction: { s: 25.0, z: -1.21, r: 31.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 2 Chat 13B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Llama 2 Chat 13B

Meta · Open · Small · 컨텍스트 4k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.0 | -1.47 | 실측 | [[gpqa-diamond]] 32.1212121212121%×0.4, [[humanitys-last-exam]] 4.77%×0.3 |
| 추론 | 35.1 | -0.99 | 실측 | [[gpqa-diamond]] 32.1212121212121%×1.0, [[humanitys-last-exam]] 4.77%×1.0 |
| 코딩 | 30.0 | -1.34 | 추정 | (추정) |
| 에이전트 | 27.2 | -1.52 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.0 | -1.54 | 추정 | (추정) |
| 지시 따르기 | 31.9 | -1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
