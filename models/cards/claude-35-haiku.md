---
type: Model
title: Claude 3.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.0, z: -1.22, r: 31.8, estimated: false }  # 전문 지식
  reasoning: { s: 13.1, z: -1.1, r: 33.5, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.23, r: 31.5, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -0.9, r: 36.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 41.6, z: -1.52, r: 27.2, estimated: false }  # 멀티모달
  long_context: { s: 30.8, z: -0.67, r: 40.0, estimated: false }  # 긴문맥
  instruction: { s: 43.1, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude 3.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.8 | -1.22 | 실측 | [[gpqa-diamond]] 40.808080808080796%×0.4, [[humanitys-last-exam]] 3.63%×0.3 |
| 추론 | 33.5 | -1.1 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 40.808080808080796%×1.0, [[humanitys-last-exam]] 3.63%×1.0 |
| 코딩 | 31.5 | -1.23 | 실측 | [[terminal-bench]] 2.27272727272727%×0.5 |
| 에이전트 | 36.4 | -0.9 | 실측 | [[gdpval]] 217.91%×1.0, [[tau2-bench]] 24.5614035087719%×1.0, [[terminal-bench]] 2.27272727272727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 27.2 | -1.52 | 실측 | [[mmmu-pro]] 45.606936416185%×1.0 |
| 긴문맥 | 40.0 | -0.67 | 실측 | [[aa-lcr]] 27.3333333333333%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 42.7891156462585%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
