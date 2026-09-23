---
type: Model
title: DeepSeek V4.1 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: 39.0
price_blended_usd_1m: 0.1842
output_speed_tps: 227.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.4, z: 1.22, r: 68.2, estimated: false }  # 전문 지식
  reasoning: { s: 53.5, z: 0.83, r: 62.5, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 82.1, z: 1.7, r: 75.5, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.1, r: 33.5, estimated: false }  # 신뢰성
  multimodal: { s: 84.9, z: 0.73, r: 60.9, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.33, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 80.8, z: 1.13, r: 66.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# DeepSeek V4.1 Flash (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 227.0 t/s · TTFT 1.08s · 1M ctx` · 가성비 211.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.2 | +1.22 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 62.5 | +0.83 | 실측 | [[critpt]] 14.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 75.5 | +1.7 | 실측 | [[gdpval]] 55.0%×1.0 |
| 신뢰성 | 33.5 | -1.1 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | 60.9 | +0.73 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 69.9 | +1.33 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 66.9 | +1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
