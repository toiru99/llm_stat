---
type: Model
title: Inkling (xhigh)
creator: Thinking Machines
license: Open
intelligence_index: 12.4781698715401
price_blended_usd_1m: 0.724
output_speed_tps: 88.9474067073123
context_window: 1000000
status: current
size_class: Large
params_b: 975
is_reasoning: true
radar:
  knowledge: { s: 69.2, z: 1.09, r: 66.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.9, z: 0.68, r: 60.3, estimated: false }  # 추론
  coding: { s: 65.9, z: 0.84, r: 62.6, estimated: false }  # 코딩
  agentic: { s: 60.9, z: 0.49, r: 57.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Inkling (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Inkling (xhigh)

Thinking Machines · Open · Large(975B) · 컨텍스트 1M · 종합지능 **12.4781698715401**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $4.05 · 혼합 $0.724/1M · 88.9474067073123 t/s · TTFT 1.8485919107286s · 1M ctx` · 가성비 17.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.3 | +1.09 | 실측 | [[gpqa-diamond]] 87.1717%×0.4, [[humanitys-last-exam]] 31.8814%×0.3 |
| 추론 | 60.3 | +0.68 | 실측 | [[critpt]] 5.42857%×1.0, [[gpqa-diamond]] 87.1717%×1.0, [[humanitys-last-exam]] 31.8814%×1.0 |
| 코딩 | 62.6 | +0.84 | 실측 | [[scicode]] 46.9907%×1.0 |
| 에이전트 | 57.3 | +0.49 | 실측 | [[gdpval]] 1080.53 Elo×1.0, [[tau3-banking]] 29.0722%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 73.4682%×1.0 |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 77.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
