---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 3.85
output_speed_tps: 57.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.8, z: 2.45, r: 86.8, estimated: false }  # 전문 지식
  reasoning: { s: 92.2, z: 2.75, r: 91.2, estimated: false }  # 추론
  coding: { s: 85.7, z: 1.88, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 89.8, z: 2.0, r: 80.0, estimated: false }  # 에이전트
  trust: { s: 39.2, z: 0.7, r: 60.5, estimated: false }  # 신뢰성
  multimodal: { s: 95.8, z: 1.27, r: 69.1, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 76.0, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 57.0 t/s · TTFT 33.78s · 1M ctx` · 가성비 13.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.8 | +2.45 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 91.2 | +2.75 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 78.3 | +1.88 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 80.0 | +2.0 | 실측 | [[gdpval]] 61.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 60.5 | +0.7 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 69.1 | +1.27 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
