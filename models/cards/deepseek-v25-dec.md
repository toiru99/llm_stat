---
type: Model
title: DeepSeek-V2.5 (Dec)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.2, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 37.2, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: 21.5, z: -0.52, r: 42.2, estimated: true }  # 코딩
  agentic: { s: 19.8, z: -0.5, r: 42.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.51, r: 42.4, estimated: true }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek-V2.5 (Dec)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# DeepSeek-V2.5 (Dec)

DeepSeek · Open · Large · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[gpqa-diamond]] 42.0%×0.4 |
| 추론 | 44.2 | -0.39 | 실측 | [[gpqa-diamond]] 42.0%×1.0 |
| 코딩 | 42.2 | -0.52 | 추정 | (추정) |
| 에이전트 | 42.6 | -0.5 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.4 | -0.51 | 추정 | (추정) |
| 지시 따르기 | 44.3 | -0.38 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
