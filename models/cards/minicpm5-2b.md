---
type: Model
title: MiniCPM5-2B
creator: OpenBMB
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 25.8, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 31.7, z: -0.16, r: 47.5, estimated: false }  # 코딩
  agentic: { s: 28.1, z: -0.41, r: 43.8, estimated: false }  # 에이전트
  trust: { s: 78.4, z: 2.41, r: 86.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.44, r: 56.6, estimated: false }  # 긴문맥
  instruction: { s: 46.1, z: -0.34, r: 44.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# MiniCPM5-2B

OpenBMB · Open · Tiny · 컨텍스트 131k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 47.5 | -0.16 | 실측 | [[scicode]] 26.0%×1.0 |
| 에이전트 | 43.8 | -0.41 | 실측 | [[gdpval]] 10.0%×1.0, [[tau3-banking]] 21.0%×1.0 |
| 신뢰성 | 86.1 | +2.41 | 실측 | [[aa-omniscience]] 78.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.6 | +0.44 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 44.9 | -0.34 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
