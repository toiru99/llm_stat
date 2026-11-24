---
type: Model
title: Granite 4.2 8B
creator: IBM
license: Open
intelligence_index: 5.09826495217051
price_blended_usd_1m: 0.0475
output_speed_tps: 105.038322358143
context_window: 131072
status: current
size_class: Small
params_b: 8
is_reasoning: true
radar:
  knowledge: { s: 40.3, z: -0.32, r: 45.3, estimated: false }  # 전문 지식
  reasoning: { s: 24.8, z: -0.52, r: 42.2, estimated: false }  # 추론
  coding: { s: 40.4, z: -0.02, r: 49.7, estimated: false }  # 코딩
  agentic: { s: 27.1, z: -0.7, r: 39.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 50.8, z: -0.21, r: 46.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.2 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Granite 4.2 8B

IBM · Open · Small(8B) · 컨텍스트 131k · 종합지능 **5.09826495217051**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.06 · 출력 $0.25 · 혼합 $0.0475/1M · 105.038322358143 t/s · TTFT 1.85344703834447s · 131k ctx` · 가성비 107.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.3 | -0.32 | 실측 | [[gpqa-diamond]] 63.1313%×0.4, [[humanitys-last-exam]] 9.68489%×0.3 |
| 추론 | 42.2 | -0.52 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 63.1313%×1.0, [[humanitys-last-exam]] 9.68489%×1.0 |
| 코딩 | 49.7 | -0.02 | 실측 | [[scicode]] 31.4815%×1.0 |
| 에이전트 | 39.4 | -0.7 | 실측 | [[gdpval]] 498.38 Elo×1.0, [[tau3-banking]] 7.62887%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.8 | -0.21 | 실측 | [[aa-lcr]] 45%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
