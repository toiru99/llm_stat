---
type: Model
title: MiniCPM5-2B
creator: OpenBMB
license: Open
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Tiny
params_b: 2.6
is_reasoning: true
radar:
  knowledge: { s: 25.9, z: -0.72, r: 39.1, estimated: false }  # 전문 지식
  reasoning: { s: 27.9, z: -0.35, r: 44.8, estimated: false }  # 추론
  coding: { s: 24.5, z: -0.3, r: 45.4, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.16, r: 47.6, estimated: false }  # 에이전트
  trust: { s: 78.4, z: 2.53, r: 87.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 66.3, z: 0.53, r: 58.0, estimated: false }  # 긴문맥
  instruction: { s: 46.3, z: -0.27, r: 46.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# MiniCPM5-2B

OpenBMB · Open · Tiny(2.6B) · 컨텍스트 131k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.1 | -0.72 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 44.8 | -0.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 45.4 | -0.3 | 실측 | [[scicode]] 26.0%×1.0 |
| 에이전트 | 47.6 | -0.16 | 실측 | [[gdpval]] 16.0%×1.0, [[tau3-banking]] 21.0%×1.0 |
| 신뢰성 | 87.9 | +2.53 | 실측 | [[aa-omniscience]] 78.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.0 | +0.53 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 46.0 | -0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
