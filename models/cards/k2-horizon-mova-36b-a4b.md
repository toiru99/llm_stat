---
type: Model
title: K2 Horizon MoVA 36B A4B
creator: Institute of Foundation Models
license: Open
intelligence_index: 13.8458943758068
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524288
status: current
size_class: Small
params_b: 36
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.69, r: 60.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.2, z: 0.25, r: 53.8, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.45, r: 56.8, estimated: false }  # 코딩
  agentic: { s: 66.3, z: 0.68, r: 60.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon MoVA 36B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# K2 Horizon MoVA 36B A4B

Institute of Foundation Models · Open · Small(36B) · 컨텍스트 524k · 종합지능 **13.8458943758068**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.3 | +0.69 | 실측 | [[gpqa-diamond]] 82.2222%×0.4, [[humanitys-last-exam]] 23.4476%×0.3 |
| 추론 | 53.8 | +0.25 | 실측 | [[critpt]] 2.28571%×1.0, [[gpqa-diamond]] 82.2222%×1.0, [[humanitys-last-exam]] 23.4476%×1.0 |
| 코딩 | 56.8 | +0.45 | 실측 | [[scicode]] 40.0463%×1.0 |
| 에이전트 | 60.2 | +0.68 | 실측 | [[gdpval]] 1198.2 Elo×1.0, [[tau3-banking]] 31.9588%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 71.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
