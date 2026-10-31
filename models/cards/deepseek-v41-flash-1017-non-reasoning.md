---
type: Model
title: DeepSeek V4.1 Flash 1017 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.2763
output_speed_tps: 1.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 18.3, z: -1.37, r: 29.5, estimated: false }  # 전문 지식
  reasoning: { s: 9.9, z: -1.61, r: 25.8, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.54, r: 58.2, estimated: false }  # 코딩
  agentic: { s: 55.7, z: 0.74, r: 61.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 64.0, z: 0.35, r: 55.3, estimated: false }  # 긴문맥
  instruction: { s: 44.1, z: -0.36, r: 44.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.45 · 출력 $1.8 · 혼합 $0.2763/1M · 1.0 t/s · TTFT 1.15s · 1M ctx` · 가성비 68.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.5 | -1.37 | 실측 | [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 25.8 | -1.61 | 실측 | [[critpt]] 1.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 58.2 | +0.54 | 실측 | [[scicode]] 39.0%×1.0 |
| 에이전트 | 61.1 | +0.74 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 55.3 | +0.35 | 실측 | [[aa-lcr]] 57.0%×1.0 |
| 지시 따르기 | 44.6 | -0.36 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
