---
type: Model
title: Claude Opus 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 45.0
price_blended_usd_1m: 3.85
output_speed_tps: 52.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.2, z: 2.06, r: 80.9, estimated: false }  # 전문 지식
  reasoning: { s: 87.7, z: 2.32, r: 84.9, estimated: false }  # 추론
  coding: { s: 75.0, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 74.8, z: 1.37, r: 70.6, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.54, r: 58.1, estimated: false }  # 신뢰성
  multimodal: { s: 91.8, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.22, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 78.6, z: 1.01, r: 65.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Claude Opus 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **45.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 52.0 t/s · TTFT 5.27s · 1M ctx` · 가성비 11.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.9 | +2.06 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 84.9 | +2.32 | 실측 | [[critpt]] 27.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 52.0%×1.0 |
| 에이전트 | 70.6 | +1.37 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | 58.1 | +0.54 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.4 | +1.22 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 65.2 | +1.01 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
