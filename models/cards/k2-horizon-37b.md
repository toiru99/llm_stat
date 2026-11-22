---
type: Model
title: K2 Horizon 3.7B
creator: Institute of Foundation Models
license: Open
intelligence_index: 8.02272873835814
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524288
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.7, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 24.8, z: -0.52, r: 42.2, estimated: false }  # 코딩
  agentic: { s: 47.4, z: 0.09, r: 51.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 70.3, z: 0.49, r: 57.4, estimated: false }  # 긴문맥
  instruction: { s: 78.5, z: 1.03, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 3.7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# K2 Horizon 3.7B

Institute of Foundation Models · Open · Tiny · 컨텍스트 524k · 종합지능 **8.02272873835814**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[gpqa-diamond]] 69.1919191919192%×0.4, [[humanitys-last-exam]] 13.855421686746999%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.1919191919192%×1.0, [[humanitys-last-exam]] 13.855421686746999%×1.0 |
| 코딩 | 42.2 | -0.52 | 실측 | [[scicode]] 21.990740740740698%×1.0 |
| 에이전트 | 51.3 | +0.09 | 실측 | [[gdpval]] 889.27%×1.0, [[tau3-banking]] 19.5876288659794%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.4 | +0.49 | 실측 | [[aa-lcr]] 62.33333333333329%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
