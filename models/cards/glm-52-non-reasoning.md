---
type: Model
title: GLM-5.2 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.8845
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.9, z: -0.14, r: 47.8, estimated: false }  # 전문 지식
  reasoning: { s: 39.9, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.36, r: 55.4, estimated: true }  # 코딩
  agentic: { s: 49.7, z: 0.51, r: 57.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.7, z: -0.16, r: 47.6, estimated: false }  # 긴문맥
  instruction: { s: 49.5, z: -0.14, r: 47.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GLM-5.2 (non-reasoning)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.8845/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.8 | -0.14 | 실측 | [[gpqa-diamond]] 68.6%×0.4, [[humanitys-last-exam]] 9.8%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[gpqa-diamond]] 68.6%×1.0, [[humanitys-last-exam]] 9.8%×1.0 |
| 코딩 | 55.4 | +0.36 | 추정 | (추정) |
| 에이전트 | 57.6 | +0.51 | 실측 | [[gdpval]] 1252.0%×1.0, [[tau3-banking]] 16.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.6 | -0.16 | 실측 | [[aa-lcr]] 42.3%×1.0 |
| 지시 따르기 | 47.9 | -0.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
