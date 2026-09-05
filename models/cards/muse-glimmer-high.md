---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 24.0
price_blended_usd_1m: 0.248
output_speed_tps: 99.0
context_window: 131000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 50.3, z: 0.45, r: 56.8, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.42, r: 56.4, estimated: false }  # 추론
  coding: { s: 63.3, z: 1.1, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 38.9, z: 0.06, r: 50.8, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: 81.9, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.36, r: 70.4, estimated: false }  # 긴문맥
  instruction: { s: 77.4, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small(30B) · 컨텍스트 131k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.35 · 출력 $1.5 · 혼합 $0.248/1M · 99.0 t/s · TTFT 1.04s · 131k ctx` · 가성비 96.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.8 | +0.45 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 56.4 | +0.42 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 66.4 | +1.1 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 50.8 | +0.06 | 실측 | [[gdpval]] 20.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 44.4 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 70.4 | +1.36 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
