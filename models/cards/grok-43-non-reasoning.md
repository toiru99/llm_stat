---
type: Model
title: Grok 4.3 (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 0.64
output_speed_tps: 108.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.6, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 25.7, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 50.7, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 39.0, z: 0.09, r: 51.4, estimated: false }  # 에이전트
  trust: { s: 27.9, z: 0.04, r: 50.5, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.04, r: 49.4, estimated: false }  # 멀티모달
  long_context: { s: 33.7, z: -0.5, r: 42.5, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.14, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Grok 4.3 (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 108.0 t/s · TTFT 0.77s · 1M ctx` · 가성비 39.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 51.4 | +0.09 | 실측 | [[gdpval]] 30.0%×1.0, [[tau2-bench]] 66.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 50.5 | +0.04 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 49.4 | -0.04 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 42.5 | -0.5 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 47.8 | -0.14 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
