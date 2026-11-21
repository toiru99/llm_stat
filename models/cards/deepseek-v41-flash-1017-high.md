---
type: Model
title: DeepSeek V4.1 Flash 1017 (high)
creator: DeepSeek
license: Open
intelligence_index: 28.6437391540402
price_blended_usd_1m: 0.1842
output_speed_tps: 167.756701912616
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.5, z: 0.93, r: 63.9, estimated: true }  # 전문 지식
  reasoning: { s: 53.1, z: 0.87, r: 63.0, estimated: true }  # 추론
  coding: { s: 60.0, z: 0.68, r: 60.2, estimated: true }  # 코딩
  agentic: { s: 61.3, z: 0.57, r: 58.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.79, r: 61.9, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.02, r: 65.3, estimated: true }  # 긴문맥
  instruction: { s: 85.5, z: 1.32, r: 69.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (high)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **28.6437391540402**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 167.756701912616 t/s · TTFT 1.10944490109391s · 1M ctx` · 가성비 155.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.9 | +0.93 | 추정 | (추정) |
| 추론 | 63.0 | +0.87 | 추정 | (추정) |
| 코딩 | 60.2 | +0.68 | 추정 | (추정) |
| 에이전트 | 58.5 | +0.57 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.9 | +0.79 | 실측 | [[mmmu-pro]] 79.7109826589595%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 추정 | (추정) |
| 지시 따르기 | 69.9 | +1.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
