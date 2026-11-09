---
type: Model
title: QwQ 32B-Preview
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 33000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 32.3, z: -0.75, r: 38.7, estimated: false }  # 전문 지식
  reasoning: { s: 28.9, z: -0.75, r: 38.8, estimated: false }  # 추론
  coding: { s: 13.1, z: -0.81, r: 37.8, estimated: true }  # 코딩
  agentic: { s: 11.4, z: -0.79, r: 38.2, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.4, z: -0.79, r: 38.1, estimated: true }  # 긴문맥
  instruction: { s: 37.5, z: -0.66, r: 40.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ 32B-Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# QwQ 32B-Preview

Alibaba · Open · Small · 컨텍스트 33k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 33k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.7 | -0.75 | 실측 | [[gpqa-diamond]] 55.7%×0.4, [[humanitys-last-exam]] 3.9%×0.3 |
| 추론 | 38.8 | -0.75 | 실측 | [[gpqa-diamond]] 55.7%×1.0, [[humanitys-last-exam]] 3.9%×1.0 |
| 코딩 | 37.8 | -0.81 | 추정 | (추정) |
| 에이전트 | 38.2 | -0.79 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.1 | -0.79 | 추정 | (추정) |
| 지시 따르기 | 40.1 | -0.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
