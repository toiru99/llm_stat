---
type: Model
title: QwQ-32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.1, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.8, z: -0.53, r: 42.1, estimated: false }  # 추론
  coding: { s: 24.7, z: -0.42, r: 43.6, estimated: true }  # 코딩
  agentic: { s: 15.1, z: -0.66, r: 40.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 30.1, z: -0.68, r: 39.8, estimated: false }  # 긴문맥
  instruction: { s: 37.5, z: -0.66, r: 40.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ-32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# QwQ-32B

Alibaba · Open · Small · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[gpqa-diamond]] 59.3%×0.4, [[humanitys-last-exam]] 7.3%×0.3 |
| 추론 | 42.1 | -0.53 | 실측 | [[gpqa-diamond]] 59.3%×1.0, [[humanitys-last-exam]] 7.3%×1.0 |
| 코딩 | 43.6 | -0.42 | 추정 | (추정) |
| 에이전트 | 40.1 | -0.66 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.8 | -0.68 | 실측 | [[aa-lcr]] 26.7%×1.0 |
| 지시 따르기 | 40.2 | -0.66 | 실측 | [[ifbench]] 38.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
