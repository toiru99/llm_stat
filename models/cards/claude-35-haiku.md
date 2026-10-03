---
type: Model
title: Claude 3.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.8, z: -1.01, r: 34.9, estimated: false }  # 전문 지식
  reasoning: { s: 13.7, z: -1.04, r: 34.4, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.14, r: 32.8, estimated: false }  # 코딩
  agentic: { s: 9.4, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.5, r: 72.4, estimated: false }  # 신뢰성
  multimodal: { s: 42.5, z: -1.44, r: 28.3, estimated: false }  # 멀티모달
  long_context: { s: 30.3, z: -0.64, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Claude 3.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.9 | -1.01 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 34.4 | -1.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.8 | -1.14 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 72.4 | +1.5 | 실측 | [[aa-omniscience]] 59.0%×1.0 |
| 멀티모달 | 28.3 | -1.44 | 실측 | [[mmmu-pro]] 46.0%×1.0 |
| 긴문맥 | 40.3 | -0.64 | 실측 | [[aa-lcr]] 27.0%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
