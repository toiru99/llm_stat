---
type: Model
title: K2 Horizon 0.9B
creator: Institute of Foundation Models
license: Open
intelligence_index: 2.71764699052683
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Tiny
params_b: 0.9
is_reasoning: true
radar:
  knowledge: { s: 15.4, z: -1.53, r: 27.1, estimated: false }  # 전문 지식
  reasoning: { s: 9.5, z: -1.28, r: 30.9, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 4.6, z: -1.5, r: 27.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.1, z: -1.55, r: 26.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 0.9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# K2 Horizon 0.9B

Institute of Foundation Models · Open · Tiny(0.9B) · 컨텍스트 131k · 종합지능 **2.71764699052683**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 27.1 | -1.53 | 실측 | [[gpqa-diamond]] 29.2929%×0.4, [[humanitys-last-exam]] 5.37535%×0.3 |
| 추론 | 30.9 | -1.28 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 29.2929%×1.0, [[humanitys-last-exam]] 5.37535%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[scicode]] 6.94444%×1.0 |
| 에이전트 | 27.5 | -1.5 | 실측 | [[gdpval]] -402.48 Elo×1.0, [[tau3-banking]] 4.94845%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.8 | -1.55 | 실측 | [[aa-lcr]] 6.33333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
