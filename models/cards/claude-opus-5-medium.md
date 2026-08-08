---
type: Model
title: Claude Opus 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 3.85
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.8, z: 2.4, r: 86.0, estimated: false }  # 전문 지식
  reasoning: { s: 91.5, z: 2.8, r: 92.1, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.56, r: 73.5, estimated: false }  # 코딩
  agentic: { s: 80.0, z: 1.76, r: 76.4, estimated: false }  # 에이전트
  trust: { s: 43.0, z: 0.77, r: 61.5, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.15, r: 67.3, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.39, r: 70.9, estimated: false }  # 긴문맥
  instruction: { s: 77.9, z: 1.0, r: 65.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Claude Opus 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 55.0 t/s · TTFT 5.85s · 1M ctx` · 가성비 15.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.0 | +2.4 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 92.1 | +2.8 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 73.5 | +1.56 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 76.4 | +1.76 | 실측 | [[gdpval]] 56.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 61.5 | +0.77 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 67.3 | +1.15 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 70.9 | +1.39 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
