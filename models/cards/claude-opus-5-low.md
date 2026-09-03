---
type: Model
title: Claude Opus 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 3.85
output_speed_tps: 53.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.8, z: 2.13, r: 81.9, estimated: false }  # 전문 지식
  reasoning: { s: 79.1, z: 2.19, r: 82.9, estimated: false }  # 추론
  coding: { s: 77.4, z: 1.28, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 1.04, r: 65.5, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.59, r: 58.8, estimated: false }  # 신뢰성
  multimodal: { s: 91.5, z: 1.04, r: 65.6, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.3, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 84.6, z: 1.32, r: 69.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 53.0 t/s · TTFT 3.37s · 1M ctx` · 가성비 13.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.9 | +2.13 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 82.9 | +2.19 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 69.1 | +1.28 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 65.5 | +1.04 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 58.8 | +0.59 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 65.6 | +1.04 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 69.4 | +1.3 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 69.8 | +1.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
