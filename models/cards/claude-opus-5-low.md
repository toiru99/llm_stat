---
type: Model
title: Claude Opus 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 3.85
output_speed_tps: 52.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.4, z: 2.19, r: 82.9, estimated: false }  # 전문 지식
  reasoning: { s: 81.2, z: 2.3, r: 84.5, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 65.2, z: 1.17, r: 67.5, estimated: false }  # 에이전트
  trust: { s: 41.9, z: 0.72, r: 60.8, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.32, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 85.7, z: 1.32, r: 69.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 52.0 t/s · TTFT 3.14s · 1M ctx` · 가성비 13.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.9 | +2.19 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 84.5 | +2.3 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 67.5 | +1.17 | 실측 | [[gdpval]] 48.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 60.8 | +0.72 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 69.7 | +1.32 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 69.8 | +1.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
