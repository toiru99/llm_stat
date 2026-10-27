---
type: Model
title: Claude Opus 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 3.85
output_speed_tps: 54.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.1, z: 2.17, r: 82.5, estimated: false }  # 전문 지식
  reasoning: { s: 89.7, z: 2.38, r: 85.6, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.42, r: 71.3, estimated: false }  # 코딩
  agentic: { s: 86.8, z: 1.8, r: 77.0, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.49, r: 57.4, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 75.7, z: 0.91, r: 63.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Opus 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 54.0 t/s · TTFT 18.86s · 1M ctx` · 가성비 12.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.5 | +2.17 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 85.6 | +2.38 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 71.3 | +1.42 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 77.0 | +1.8 | 실측 | [[gdpval]] 1595.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 63.6 | +0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
