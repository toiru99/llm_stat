---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.228
output_speed_tps: 126.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.1, z: 0.35, r: 55.3, estimated: false }  # 전문 지식
  reasoning: { s: 43.5, z: 0.32, r: 54.7, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.92, r: 63.8, estimated: false }  # 코딩
  agentic: { s: 34.6, z: -0.16, r: 47.5, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.47, r: 43.0, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.47, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 79.2, z: 1.03, r: 65.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small · 컨텍스트 131k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.32 · 출력 $1.35 · 혼합 $0.228/1M · 126.0 t/s · TTFT 1.39s · 131k ctx` · 가성비 74.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 54.7 | +0.32 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 63.8 | +0.92 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 47.5 | -0.16 | 실측 | [[gdpval]] 15.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 57.1 | +0.47 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 65.4 | +1.03 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
