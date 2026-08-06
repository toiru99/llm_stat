---
type: Model
title: Claude 3.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.1, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 13.6, z: -1.05, r: 34.2, estimated: false }  # 추론
  coding: { s: 31.0, z: -0.68, r: 39.9, estimated: false }  # 코딩
  agentic: { s: 10.6, z: -1.0, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 65.5, z: 1.69, r: 75.3, estimated: false }  # 신뢰성
  multimodal: { s: 44.3, z: -1.33, r: 30.1, estimated: false }  # 멀티모달
  long_context: { s: 30.3, z: -0.58, r: 41.3, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Claude 3.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 41.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 34.2 | -1.05 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 41.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 39.9 | -0.68 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 34.9 | -1.0 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 75.3 | +1.69 | 실측 | [[aa-omniscience]] 58.0%×1.0 |
| 멀티모달 | 30.1 | -1.33 | 실측 | [[mmmu-pro]] 46.0%×1.0 |
| 긴문맥 | 41.3 | -0.58 | 실측 | [[aa-lcr]] 23.0%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
