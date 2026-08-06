---
type: Model
title: Claude Opus 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 61.0
price_blended_usd_1m: 3.85
output_speed_tps: 54.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.9, z: 2.42, r: 86.3, estimated: false }  # 전문 지식
  reasoning: { s: 96.5, z: 3.08, r: 96.2, estimated: false }  # 추론
  coding: { s: 93.3, z: 1.91, r: 78.6, estimated: false }  # 코딩
  agentic: { s: 85.7, z: 2.0, r: 80.0, estimated: false }  # 에이전트
  trust: { s: 56.3, z: 1.26, r: 69.0, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.36, r: 70.4, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 82.5, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Claude Opus 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **61.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 54.0 t/s · TTFT 62.83s · 1M ctx` · 가성비 15.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.3 | +2.42 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 96.2 | +3.08 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 78.6 | +1.91 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 80.0 | +2.0 | 실측 | [[gdpval]] 68.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 69.0 | +1.26 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 70.4 | +1.36 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
