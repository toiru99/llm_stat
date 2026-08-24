---
type: Model
title: DeepSeek-V2.5 (Dec)
creator: DeepSeek
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 236
is_reasoning: false
radar:
  knowledge: { s: 37.6, z: -0.18, r: 47.3, estimated: false }  # 전문 지식
  reasoning: { s: 37.6, z: 0.1, r: 51.4, estimated: false }  # 추론
  coding: { s: 54.9, z: 0.26, r: 53.8, estimated: true }  # 코딩
  agentic: { s: 46.5, z: 0.36, r: 55.4, estimated: true }  # 에이전트
  trust: { s: 49.3, z: 0.91, r: 63.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.1, z: 0.19, r: 52.9, estimated: true }  # 긴문맥
  instruction: { s: 53.1, z: -0.05, r: 49.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek-V2.5 (Dec)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# DeepSeek-V2.5 (Dec)

DeepSeek · Open · Large(236B) · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.3 | -0.18 | 실측 | [[gpqa-diamond]] 42.0%×0.4 |
| 추론 | 51.4 | +0.1 | 실측 | [[gpqa-diamond]] 42.0%×1.0 |
| 코딩 | 53.8 | +0.26 | 추정 | (추정) |
| 에이전트 | 55.4 | +0.36 | 추정 | (추정) |
| 신뢰성 | 63.7 | +0.91 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.9 | +0.19 | 추정 | (추정) |
| 지시 따르기 | 49.2 | -0.05 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
