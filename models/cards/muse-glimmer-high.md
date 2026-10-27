---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.208
output_speed_tps: 107.0
context_window: 131000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.1, z: 0.32, r: 54.8, estimated: false }  # 전문 지식
  reasoning: { s: 43.4, z: 0.28, r: 54.2, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.86, r: 62.9, estimated: false }  # 코딩
  agentic: { s: 44.4, z: 0.33, r: 55.0, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.49, r: 42.7, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.43, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 79.2, z: 1.06, r: 65.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small · 컨텍스트 131k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.208/1M · 107.0 t/s · TTFT 1.17s · 131k ctx` · 가성비 81.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.8 | +0.32 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 54.2 | +0.28 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 62.9 | +0.86 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 55.0 | +0.33 | 실측 | [[gdpval]] 783.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 42.7 | -0.49 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 56.5 | +0.43 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 65.8 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
