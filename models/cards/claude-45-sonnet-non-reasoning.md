---
type: Model
title: Claude 4.5 Sonnet (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 2.31
output_speed_tps: 40.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.8, z: 0.18, r: 52.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.2, z: -0.32, r: 45.3, estimated: false }  # 추론
  coding: { s: 60.9, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 57.3, z: 0.79, r: 61.8, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 1.05, r: 65.8, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: 0.02, r: 50.3, estimated: false }  # 멀티모달
  long_context: { s: 62.7, z: 0.39, r: 55.9, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude 4.5 Sonnet (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 40.0 t/s · TTFT 1.26s · 1M ctx` · 가성비 13.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.6 | +0.18 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.3 | -0.32 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 61.8 | +0.79 | 실측 | [[tau2-bench]] 70.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 65.8 | +1.05 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 50.3 | +0.02 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 55.9 | +0.39 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
