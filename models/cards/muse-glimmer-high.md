---
type: Model
title: Muse Glimmer (high)
creator: Meta
license: Open
intelligence_index: 35.0
price_blended_usd_1m: 0.228
output_speed_tps: 109.0
context_window: 131000
status: current
size_class: Small
params_b: 30
is_reasoning: true
radar:
  knowledge: { s: 50.6, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 44.2, z: 0.47, r: 57.0, estimated: false }  # 추론
  coding: { s: 71.0, z: 1.0, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 40.0, z: 0.1, r: 51.5, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.2, estimated: false }  # 신뢰성
  multimodal: { s: 83.1, z: 0.62, r: 59.3, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.41, r: 71.1, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Glimmer (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Muse Glimmer (high)

Meta · Open · Small(30B) · 컨텍스트 131k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.32 · 출력 $1.35 · 혼합 $0.228/1M · 109.0 t/s · TTFT 0.79s · 131k ctx` · 가성비 153.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 57.0 | +0.47 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 65.1 | +1.0 | 실측 | [[scicode]] 44.0%×1.0 |
| 에이전트 | 51.5 | +0.1 | 실측 | [[gdpval]] 23.0%×1.0, [[tau3-banking]] 24.0%×1.0 |
| 신뢰성 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 59.3 | +0.62 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 71.1 | +1.41 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
