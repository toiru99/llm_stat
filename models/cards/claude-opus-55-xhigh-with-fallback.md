---
type: Model
title: Claude Opus 5.5 (xhigh with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 2.94
output_speed_tps: 82.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 96.5, z: 2.47, r: 87.0, estimated: false }  # 전문 지식
  reasoning: { s: 96.0, z: 2.66, r: 89.9, estimated: false }  # 추론
  coding: { s: 96.7, z: 1.99, r: 79.8, estimated: false }  # 코딩
  agentic: { s: 98.4, z: 2.2, r: 83.0, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.26, r: 53.9, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.32, r: 69.9, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 78.2, z: 1.01, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (xhigh with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Opus 5.5 (xhigh with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 82.0 t/s · TTFT 126.56s · 1M ctx` · 가성비 19.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 87.0 | +2.47 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[humanitys-last-exam]] 58.0%×0.3 |
| 추론 | 89.9 | +2.66 | 실측 | [[critpt]] 32.0%×1.0, [[humanitys-last-exam]] 58.0%×1.0 |
| 코딩 | 79.8 | +1.99 | 실측 | [[scicode]] 65.0%×1.0 |
| 에이전트 | 83.0 | +2.2 | 실측 | [[gdpval]] 1837.0%×1.0 |
| 신뢰성 | 53.9 | +0.26 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 69.9 | +1.32 | 실측 | [[mmmu-pro]] 87.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 65.2 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
