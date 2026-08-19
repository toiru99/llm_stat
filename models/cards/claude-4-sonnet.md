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
is_reasoning: false
radar:
  knowledge: { s: 42.3, z: 0.05, r: 50.8, estimated: false }  # 전문 지식
  reasoning: { s: 32.8, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 60.1, z: 0.48, r: 57.2, estimated: false }  # 코딩
  agentic: { s: 43.6, z: 0.27, r: 54.0, estimated: false }  # 에이전트
  trust: { s: 80.2, z: 2.33, r: 84.9, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.25, r: 46.2, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.25, r: 53.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
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
| 전문 지식 | 50.8 | +0.05 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 57.2 | +0.48 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 54.0 | +0.27 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 84.9 | +2.33 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | 46.2 | -0.25 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 53.8 | +0.25 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
