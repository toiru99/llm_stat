---
type: Model
title: DeepSeek V4 Pro 0813 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.6908
output_speed_tps: 92.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.7, z: -1.44, r: 28.4, estimated: false }  # 전문 지식
  reasoning: { s: 16.7, z: -1.31, r: 30.4, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.6, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 57.1, z: 0.78, r: 61.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 57.3, z: 0.15, r: 52.2, estimated: false }  # 긴문맥
  instruction: { s: 47.2, z: -0.23, r: 46.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro 0813 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-03
timestamp: 2026-11-03T00:00:00Z
---

# DeepSeek V4 Pro 0813 (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.32 · 출력 $3.96 · 혼합 $0.6908/1M · 92.0 t/s · TTFT 1.81s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.4 | -1.44 | 실측 | [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 30.4 | -1.31 | 실측 | [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 58.9 | +0.6 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 61.7 | +0.78 | 실측 | [[gdpval]] 1066.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.2 | +0.15 | 실측 | [[aa-lcr]] 51.0%×1.0 |
| 지시 따르기 | 46.5 | -0.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
