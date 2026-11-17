---
type: Model
title: Claude 4 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.32, r: 45.2, estimated: false }  # 전문 지식
  reasoning: { s: 25.1, z: -0.51, r: 42.4, estimated: false }  # 추론
  coding: { s: 41.4, z: 0.06, r: 50.8, estimated: false }  # 코딩
  agentic: { s: 47.1, z: 0.09, r: 51.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.0, z: -0.37, r: 44.5, estimated: false }  # 멀티모달
  long_context: { s: 49.6, z: -0.11, r: 48.4, estimated: false }  # 긴문맥
  instruction: { s: 46.7, z: -0.29, r: 45.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude 4 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.2 | -0.32 | 실측 | [[gpqa-diamond]] 68.2828282828283%×0.4, [[humanitys-last-exam]] 4.2632066728452305%×0.3 |
| 추론 | 42.4 | -0.51 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 68.2828282828283%×1.0, [[humanitys-last-exam]] 4.2632066728452305%×1.0 |
| 코딩 | 50.8 | +0.06 | 실측 | [[terminal-bench]] 27.2727272727273%×0.5 |
| 에이전트 | 51.3 | +0.09 | 실측 | [[tau2-bench]] 52.339181286549696%×1.0, [[terminal-bench]] 27.2727272727273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.5 | -0.37 | 실측 | [[mmmu-pro]] 62.3699421965318%×1.0 |
| 긴문맥 | 48.4 | -0.11 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 실측 | [[ifbench]] 45.374149659863896%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
