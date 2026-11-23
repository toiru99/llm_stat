---
type: Model
title: Claude Sonnet 5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 101.735343522307
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.46, r: 56.9, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: 0.04, r: 50.5, estimated: false }  # 추론
  coding: { s: 51.3, z: 0.38, r: 55.7, estimated: true }  # 코딩
  agentic: { s: 50.9, z: 0.21, r: 53.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.6, z: 0.26, r: 54.0, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Claude Sonnet 5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 101.735343522307 t/s · TTFT 0.927780264222131s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.9 | +0.46 | 실측 | [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 19.0454124189064%×0.3 |
| 추론 | 50.5 | +0.04 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 19.0454124189064%×1.0 |
| 코딩 | 55.7 | +0.38 | 추정 | (추정) |
| 에이전트 | 53.1 | +0.21 | 실측 | [[gdpval]] 1220.34%×1.0, [[tau3-banking]] 15.6701030927835%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 54.0 | +0.26 | 실측 | [[mmmu-pro]] 71.90751445086701%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
