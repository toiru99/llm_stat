---
type: Model
title: GLM-5.2 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.867
output_speed_tps: 180.0
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.6, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 41.8, z: -0.17, r: 47.4, estimated: false }  # 추론
  coding: { s: 49.1, z: 0.4, r: 56.0, estimated: true }  # 코딩
  agentic: { s: 50.2, z: 0.55, r: 58.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.15, r: 47.7, estimated: false }  # 긴문맥
  instruction: { s: 49.6, z: -0.13, r: 48.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GLM-5.2 (non-reasoning)

Z AI · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.867/1M · 180.0 t/s · TTFT 1.18s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.4 | -0.17 | 실측 | [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 56.0 | +0.4 | 추정 | (추정) |
| 에이전트 | 58.3 | +0.55 | 실측 | [[gdpval]] 1252.0%×1.0, [[tau3-banking]] 17.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.7 | -0.15 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 48.0 | -0.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
