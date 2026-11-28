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
params_b: 3.7
is_reasoning: true
radar:
  knowledge: { s: 46.7, z: -0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 28.7, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 24.8, z: -0.55, r: 41.8, estimated: false }  # 코딩
  agentic: { s: 47.4, z: 0.01, r: 50.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 70.3, z: 0.39, r: 55.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 3.7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# K2 Horizon 3.7B

Institute of Foundation Models · Open · Tiny(3.7B) · 컨텍스트 524k · 종합지능 **8.02272873835814**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +-0.0 | 실측 | [[gpqa-diamond]] 69.1919%×0.4, [[humanitys-last-exam]] 13.8554%×0.3 |
| 추론 | 45.2 | -0.32 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.1919%×1.0, [[humanitys-last-exam]] 13.8554%×1.0 |
| 코딩 | 41.8 | -0.55 | 실측 | [[scicode]] 21.9907%×1.0 |
| 에이전트 | 50.1 | +0.01 | 실측 | [[gdpval]] 889.23 Elo×1.0, [[tau3-banking]] 19.5876%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.8 | +0.39 | 실측 | [[aa-lcr]] 62.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
