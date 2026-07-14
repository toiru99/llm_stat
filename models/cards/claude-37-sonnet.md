---
type: Model
title: Claude 3.7 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.3, z: 0.38, r: 55.7, estimated: false }  # 전문 지식
  reasoning: { s: 33.4, z: -0.0, r: 49.9, estimated: false }  # 추론
  coding: { s: 55.1, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 43.7, z: 0.3, r: 54.4, estimated: false }  # 에이전트
  trust: { s: 70.6, z: 2.02, r: 80.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.3, z: 0.94, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.06, r: 49.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.7 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# Claude 3.7 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.7 | +0.38 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 49.9 | +-0.0 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 54.4 | +0.3 | 실측 | [[tau2-bench]] 55.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 80.3 | +2.02 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.2 | +0.94 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 49.1 | -0.06 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
