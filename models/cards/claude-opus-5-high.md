---
type: Model
title: Claude Opus 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 3.85
output_speed_tps: 52.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.1, z: 2.2, r: 82.9, estimated: false }  # 전문 지식
  reasoning: { s: 89.7, z: 2.42, r: 86.3, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.46, r: 71.9, estimated: false }  # 코딩
  agentic: { s: 84.6, z: 1.72, r: 75.8, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.52, r: 57.8, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.02, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 77.2, z: 0.94, r: 64.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-15
timestamp: 2026-10-15T00:00:00Z
---

# Claude Opus 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 52.0 t/s · TTFT 20.37s · 1M ctx` · 가성비 12.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.9 | +2.2 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 53.0%×0.3 |
| 추론 | 86.3 | +2.42 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 53.0%×1.0 |
| 코딩 | 71.9 | +1.46 | 실측 | [[scicode]] 55.0%×1.0 |
| 에이전트 | 75.8 | +1.72 | 실측 | [[gdpval]] 55.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 57.8 | +0.52 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 65.2 | +1.02 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 64.2 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
