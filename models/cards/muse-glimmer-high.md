---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 35.0
price_blended_usd_1m: 0.228
output_speed_tps: 101.0
context_window: 131000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 51.2, z: 0.47, r: 57.0, estimated: false }  # 전문 지식
  reasoning: { s: 45.1, z: 0.46, r: 56.9, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.01, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 40.7, z: 0.13, r: 52.0, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.41, r: 43.9, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.37, r: 70.6, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.14, r: 67.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small(30B) · 컨텍스트 131k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.32 · 출력 $1.35 · 혼합 $0.228/1M · 101.0 t/s · TTFT 0.8s · 131k ctx` · 가성비 153.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.0 | +0.47 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 56.9 | +0.46 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 65.1 | +1.01 | 실측 | [[scicode]] 44.0%×1.0 |
| 에이전트 | 52.0 | +0.13 | 실측 | [[gdpval]] 23.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 43.9 | -0.41 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 70.6 | +1.37 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.0 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
