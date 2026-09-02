---
type: Model
title: Claude Sonnet 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 1.54
output_speed_tps: 71.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.7, z: 1.46, r: 72.0, estimated: false }  # 전문 지식
  reasoning: { s: 72.5, z: 1.91, r: 78.6, estimated: false }  # 추론
  coding: { s: 87.1, z: 1.71, r: 75.7, estimated: false }  # 코딩
  agentic: { s: 76.0, z: 1.51, r: 72.7, estimated: false }  # 에이전트
  trust: { s: 60.8, z: 1.74, r: 76.1, estimated: false }  # 신뢰성
  multimodal: { s: 88.6, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.31, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 82.0, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude Sonnet 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **55.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 71.0 t/s · TTFT 185.91s · 1M ctx` · 가성비 35.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.0 | +1.46 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 78.6 | +1.91 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 75.7 | +1.71 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 72.7 | +1.51 | 실측 | [[gdpval]] 54.0%×1.0, [[tau3-banking]] 37.0%×1.0 |
| 신뢰성 | 76.1 | +1.74 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 69.7 | +1.31 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
