---
type: Model
title: K2 Horizon 0.9B
creator: Institute of Foundation Models
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Tiny
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 12.5, z: -1.38, r: 29.3, estimated: false }  # 전문 지식
  reasoning: { s: 9.6, z: -1.22, r: 31.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.21, r: 31.8, estimated: false }  # 코딩
  agentic: { s: 4.9, z: -1.27, r: 31.0, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.7, z: -1.34, r: 29.9, estimated: false }  # 긴문맥
  instruction: { s: 22.9, z: -1.27, r: 31.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon 0.9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# K2 Horizon 0.9B

Institute of Foundation Models · Open · Tiny · 컨텍스트 131k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.3 | -1.38 | 실측 | [[aa-omniscience]] 7.0%×1.0, [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.7 | -1.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.8 | -1.21 | 실측 | [[scicode]] 7.0%×1.0 |
| 에이전트 | 31.0 | -1.27 | 실측 | [[gdpval]] 0.0%×1.0, [[tau3-banking]] 5.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.9 | -1.34 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 31.0 | -1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
