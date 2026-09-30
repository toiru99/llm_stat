---
type: Model
title: Claude Opus 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 3.85
output_speed_tps: 50.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.89, r: 78.4, estimated: false }  # 전문 지식
  reasoning: { s: 77.9, z: 1.9, r: 78.5, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.17, r: 67.6, estimated: false }  # 코딩
  agentic: { s: 59.3, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.51, r: 57.6, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.91, r: 63.7, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.27, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 50.0 t/s · TTFT 2.96s · 1M ctx` · 가성비 10.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.89 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 78.5 | +1.9 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 67.6 | +1.17 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[gdpval]] 40.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | 57.6 | +0.51 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 63.7 | +0.91 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
