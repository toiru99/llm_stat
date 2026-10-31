---
type: Model
title: Claude Sonnet 5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 65.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.4, z: 0.44, r: 56.6, estimated: false }  # 전문 지식
  reasoning: { s: 55.7, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 52.0, z: 0.5, r: 57.5, estimated: true }  # 코딩
  agentic: { s: 48.4, z: 0.49, r: 57.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.1, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.57, r: 58.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Sonnet 5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 65.0 t/s · TTFT 0.77s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.6 | +0.44 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 57.5 | +0.5 | 추정 | (추정) |
| 에이전트 | 57.3 | +0.49 | 실측 | [[gdpval]] 1221.0%×1.0, [[tau3-banking]] 16.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 58.5 | +0.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
