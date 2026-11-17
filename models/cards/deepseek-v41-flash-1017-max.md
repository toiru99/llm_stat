---
type: Model
title: DeepSeek V4.1 Flash 1017 (max)
creator: DeepSeek
license: Open
intelligence_index: 32.5896393532027
price_blended_usd_1m: 0.1842
output_speed_tps: 178.05179115015207
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.7, z: 0.51, r: 57.7, estimated: false }  # 전문 지식
  reasoning: { s: 62.5, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 80.6, z: 1.39, r: 70.8, estimated: false }  # 코딩
  agentic: { s: 94.7, z: 1.74, r: 76.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.5, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.53, r: 57.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4.1 Flash 1017 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# DeepSeek V4.1 Flash 1017 (max)

DeepSeek · Open · Large · 컨텍스트 1M · 종합지능 **32.5896393532027**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.1842/1M · 178.05179115015207 t/s · TTFT 1.265836107279764s · 1M ctx` · 가성비 176.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.7 | +0.51 | 실측 | [[humanitys-last-exam]] 43.327154772937895%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[critpt]] 24.0%×1.0, [[humanitys-last-exam]] 43.327154772937895%×1.0 |
| 코딩 | 70.8 | +1.39 | 실측 | [[scicode]] 55.9027777777778%×1.0 |
| 에이전트 | 76.0 | +1.74 | 실측 | [[gdpval]] 1745.77%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.63583815028899%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 82.6666666666667%×1.0 |
| 지시 따르기 | 57.9 | +0.53 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
