---
type: Model
title: Claude 4 Sonnet (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.2, z: -0.17, r: 47.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.5, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 53.4, z: 0.27, r: 54.0, estimated: false }  # 코딩
  agentic: { s: 46.7, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.61, r: 74.2, estimated: false }  # 신뢰성
  multimodal: { s: 66.2, z: -0.21, r: 46.8, estimated: false }  # 멀티모달
  long_context: { s: 55.4, z: 0.16, r: 52.4, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.27, r: 45.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude 4 Sonnet (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 11.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.4 | -0.17 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 54.0 | +0.27 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[tau2-bench]] 52.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 74.2 | +1.61 | 실측 | [[aa-omniscience]] 59.0%×1.0 |
| 멀티모달 | 46.8 | -0.21 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 52.4 | +0.16 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 45.9 | -0.27 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
