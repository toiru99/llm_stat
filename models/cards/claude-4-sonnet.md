---
type: Model
title: Claude 4 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.5, z: 0.15, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 30.8, z: -0.24, r: 46.5, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 48.3, z: 0.12, r: 51.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.1, z: -0.43, r: 43.6, estimated: false }  # 멀티모달
  long_context: { s: 79.3, z: 0.76, r: 61.4, estimated: false }  # 긴문맥
  instruction: { s: 59.8, z: 0.25, r: 53.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Claude 4 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.15 | 실측 | [[gpqa-diamond]] 77.6767676767677%×0.4, [[humanitys-last-exam]] 10.704355885078801%×0.3 |
| 추론 | 46.5 | -0.24 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 77.6767676767677%×1.0, [[humanitys-last-exam]] 10.704355885078801%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.060606060606098%×0.5 |
| 에이전트 | 51.7 | +0.12 | 실측 | [[gdpval]] 698.21%×1.0, [[tau2-bench]] 64.6198830409357%×1.0, [[tau3-banking]] 16.7010309278351%×1.0, [[terminal-bench]] 31.060606060606098%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.6 | -0.43 | 실측 | [[mmmu-pro]] 61.7919075144509%×1.0 |
| 긴문맥 | 61.4 | +0.76 | 실측 | [[aa-lcr]] 70.3333333333333%×1.0 |
| 지시 따르기 | 53.7 | +0.25 | 실측 | [[ifbench]] 54.6938775510204%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
