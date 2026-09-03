---
type: Model
title: Claude 4 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.1, z: 0.07, r: 51.1, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 58.7, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 43.3, z: 0.23, r: 53.4, estimated: false }  # 에이전트
  trust: { s: 71.1, z: 2.2, r: 83.0, estimated: false }  # 신뢰성
  multimodal: { s: 66.2, z: -0.21, r: 46.8, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.32, r: 54.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude 4 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 13.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.1 | +0.07 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 53.4 | +0.23 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 83.0 | +2.2 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | 46.8 | -0.21 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 54.8 | +0.32 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
