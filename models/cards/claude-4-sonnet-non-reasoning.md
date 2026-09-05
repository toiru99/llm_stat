---
type: Model
title: Claude 4 Sonnet (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 37.0, z: -0.19, r: 47.2, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.31, r: 54.7, estimated: false }  # 코딩
  agentic: { s: 46.7, z: 0.35, r: 55.3, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.62, r: 74.3, estimated: false }  # 신뢰성
  multimodal: { s: 65.3, z: -0.24, r: 46.4, estimated: false }  # 멀티모달
  long_context: { s: 49.4, z: 0.01, r: 50.2, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.25, r: 46.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Claude 4 Sonnet (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 8.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.2 | -0.19 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 54.7 | +0.31 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 55.3 | +0.35 | 실측 | [[tau2-bench]] 52.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 74.3 | +1.62 | 실측 | [[aa-omniscience]] 59.0%×1.0 |
| 멀티모달 | 46.4 | -0.24 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 50.2 | +0.01 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 46.2 | -0.25 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
