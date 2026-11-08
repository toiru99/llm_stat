---
type: Model
title: DeepSeek V4.1 Flash 1017 (high)
creator: DeepSeek
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.1842
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.4, z: -0.31, r: 45.4, estimated: true }  # 전문 지식
  reasoning: { s: 38.2, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 32.5, z: -0.16, r: 47.6, estimated: true }  # 코딩
  agentic: { s: 30.7, z: -0.13, r: 48.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 43.8, z: -0.27, r: 46.0, estimated: true }  # 긴문맥
  instruction: { s: 45.4, z: -0.32, r: 45.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (high)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 157.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 추정 | (추정) |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 27.5%×1.0 |
| 코딩 | 47.6 | -0.16 | 추정 | (추정) |
| 에이전트 | 48.1 | -0.13 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 46.0 | -0.27 | 추정 | (추정) |
| 지시 따르기 | 45.2 | -0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
