---
type: Model
title: Claude Opus 5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: None
output_speed_tps: 57.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.5, z: 2.37, r: 85.5, estimated: false }  # 전문 지식
  reasoning: { s: 94.6, z: 3.03, r: 95.4, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.8, r: 77.0, estimated: false }  # 코딩
  agentic: { s: 95.6, z: 2.29, r: 84.4, estimated: false }  # 에이전트
  trust: { s: 54.0, z: 1.22, r: 68.3, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.16, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 75.8, z: 0.94, r: 64.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Claude Opus 5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 57.0 t/s · TTFT 21.67s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.5 | +2.37 | 실측 | [[aa-omniscience]] 53.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 51.0%×0.3 |
| 추론 | 95.4 | +3.03 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 51.0%×1.0 |
| 코딩 | 77.0 | +1.8 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 84.4 | +2.29 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 33.0%×1.0 |
| 신뢰성 | 68.3 | +1.22 | 실측 | [[aa-omniscience]] 48.0%×1.0 |
| 멀티모달 | 67.5 | +1.16 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
