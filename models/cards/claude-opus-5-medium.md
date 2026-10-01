---
type: Model
title: Claude Opus 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 3.85
output_speed_tps: 50.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.2, z: 2.07, r: 81.0, estimated: false }  # 전문 지식
  reasoning: { s: 87.7, z: 2.33, r: 84.9, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.33, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 74.8, z: 1.38, r: 70.7, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.53, r: 58.0, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.23, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 78.3, z: 1.0, r: 65.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Claude Opus 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 50.0 t/s · TTFT 10.93s · 1M ctx` · 가성비 11.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.0 | +2.07 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 84.9 | +2.33 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 69.9 | +1.33 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 70.7 | +1.38 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 58.0 | +0.53 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.4 | +1.23 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
