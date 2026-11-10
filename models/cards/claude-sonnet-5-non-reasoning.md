---
type: Model
title: Claude Sonnet 5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.48, r: 57.2, estimated: false }  # 전문 지식
  reasoning: { s: 52.8, z: 0.47, r: 57.0, estimated: false }  # 추론
  coding: { s: 51.9, z: 0.48, r: 57.1, estimated: true }  # 코딩
  agentic: { s: 47.9, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 77.0, z: 0.28, r: 54.2, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.78, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 68.7, z: 0.68, r: 60.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude Sonnet 5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.2 | +0.48 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 57.0 | +0.47 | 실측 | [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 57.1 | +0.48 | 추정 | (추정) |
| 에이전트 | 56.6 | +0.44 | 실측 | [[gdpval]] 1221.0%×1.0, [[tau3-banking]] 15.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.2 | +0.28 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 61.6 | +0.78 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 60.2 | +0.68 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
