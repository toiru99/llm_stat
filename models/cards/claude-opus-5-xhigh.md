---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: None
output_speed_tps: 52.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.2, z: 2.4, r: 86.0, estimated: false }  # 전문 지식
  reasoning: { s: 95.8, z: 3.09, r: 96.4, estimated: false }  # 추론
  coding: { s: 91.7, z: 1.87, r: 78.1, estimated: false }  # 코딩
  agentic: { s: 97.0, z: 2.35, r: 85.2, estimated: false }  # 에이전트
  trust: { s: 56.3, z: 1.33, r: 69.9, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.3, r: 69.5, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 78.2, z: 1.04, r: 65.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 52.0 t/s · TTFT 38.85s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.0 | +2.4 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 96.4 | +3.09 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 78.1 | +1.87 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 85.2 | +2.35 | 실측 | [[gdpval]] 66.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 69.9 | +1.33 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 69.5 | +1.3 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 65.5 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
