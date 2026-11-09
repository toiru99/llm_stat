---
type: Model
title: DeepSeek V4.1 Flash 1017 (non-reasoning)
creator: DeepSeek
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.1842
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.2, z: -1.42, r: 28.7, estimated: false }  # 전문 지식
  reasoning: { s: 9.3, z: -1.62, r: 25.6, estimated: false }  # 추론
  coding: { s: 52.7, z: 0.51, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 55.7, z: 0.73, r: 61.0, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.1, estimated: false }  # 멀티모달
  long_context: { s: 64.6, z: 0.36, r: 55.3, estimated: false }  # 긴문맥
  instruction: { s: 47.7, z: -0.22, r: 46.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (non-reasoning)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 103.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.7 | -1.42 | 실측 | [[humanitys-last-exam]] 11.5%×0.3 |
| 추론 | 25.6 | -1.62 | 실측 | [[critpt]] 1.0%×1.0, [[humanitys-last-exam]] 11.5%×1.0 |
| 코딩 | 57.6 | +0.51 | 실측 | [[scicode]] 38.5%×1.0 |
| 에이전트 | 61.0 | +0.73 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.1 | +0.08 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 55.3 | +0.36 | 실측 | [[aa-lcr]] 57.3%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
