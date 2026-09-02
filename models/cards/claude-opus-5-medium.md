---
type: Model
title: Claude Opus 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 3.85
output_speed_tps: 48.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.0, z: 2.37, r: 85.6, estimated: false }  # 전문 지식
  reasoning: { s: 89.0, z: 2.74, r: 91.0, estimated: false }  # 추론
  coding: { s: 82.3, z: 1.51, r: 72.6, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.65, r: 74.7, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.66, r: 59.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.21, r: 68.1, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.39, r: 70.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude Opus 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 48.0 t/s · TTFT 4.47s · 1M ctx` · 가성비 15.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.6 | +2.37 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 91.0 | +2.74 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 72.6 | +1.51 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 74.7 | +1.65 | 실측 | [[gdpval]] 56.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 59.9 | +0.66 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 68.1 | +1.21 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 70.8 | +1.39 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
