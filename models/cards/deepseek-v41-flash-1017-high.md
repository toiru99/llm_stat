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
  knowledge: { s: 43.2, z: -0.28, r: 45.8, estimated: true }  # 전문 지식
  reasoning: { s: 38.9, z: -0.3, r: 45.4, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.36, r: 44.6, estimated: true }  # 코딩
  agentic: { s: 29.1, z: -0.18, r: 47.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 49.2, z: -0.1, r: 48.5, estimated: true }  # 긴문맥
  instruction: { s: 47.9, z: -0.22, r: 46.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (high)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 157.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.8 | -0.28 | 추정 | (추정) |
| 추론 | 45.4 | -0.3 | 실측 | [[critpt]] 28.0%×1.0 |
| 코딩 | 44.6 | -0.36 | 추정 | (추정) |
| 에이전트 | 47.3 | -0.18 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 48.5 | -0.1 | 추정 | (추정) |
| 지시 따르기 | 46.8 | -0.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
