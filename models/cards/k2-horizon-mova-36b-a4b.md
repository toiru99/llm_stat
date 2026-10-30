---
type: Model
title: K2 Horizon MoVA 36B A4B
creator: Institute of Foundation Models
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 524000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.6, z: 0.62, r: 59.3, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 0.65, r: 59.8, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 63.4, z: 1.01, r: 65.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 75.2, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — K2 Horizon MoVA 36B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# K2 Horizon MoVA 36B A4B

Institute of Foundation Models · Open · Small · 컨텍스트 524k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 524k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.3 | +0.62 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 59.8 | +0.65 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 65.1 | +1.01 | 실측 | [[gdpval]] 1197.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
