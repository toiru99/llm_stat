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
  knowledge: { s: 36.8, z: -0.56, r: 41.7, estimated: false }  # 전문 지식
  reasoning: { s: 33.5, z: -0.55, r: 41.7, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.44, r: 43.5, estimated: true }  # 코딩
  agentic: { s: 12.1, z: -0.76, r: 38.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 30.3, z: -0.66, r: 40.1, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.62, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — QwQ-32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# QwQ-32B

Alibaba · Open · Small · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.7 | -0.56 | 실측 | [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 41.7 | -0.55 | 실측 | [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 43.5 | -0.44 | 추정 | (추정) |
| 에이전트 | 38.6 | -0.76 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.1 | -0.66 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 40.8 | -0.62 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
