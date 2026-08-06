---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 60.0
price_blended_usd_1m: 3.85
output_speed_tps: 55.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.2, z: 2.39, r: 85.8, estimated: false }  # 전문 지식
  reasoning: { s: 95.8, z: 3.05, r: 95.7, estimated: false }  # 추론
  coding: { s: 91.7, z: 1.84, r: 77.5, estimated: false }  # 코딩
  agentic: { s: 86.6, z: 2.03, r: 80.5, estimated: false }  # 에이전트
  trust: { s: 56.3, z: 1.26, r: 69.0, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.29, r: 69.3, estimated: false }  # 멀티모달
  long_context: { s: 90.8, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 79.2, z: 1.07, r: 66.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **60.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 55.0 t/s · TTFT 40.2s · 1M ctx` · 가성비 15.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.8 | +2.39 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 95.7 | +3.05 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 77.5 | +1.84 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 80.5 | +2.03 | 실측 | [[gdpval]] 66.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 69.0 | +1.26 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 69.3 | +1.29 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
