---
type: Model
title: Grok 4.3 (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: None
output_speed_tps: 136.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.9, z: -0.06, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.46, r: 43.2, estimated: false }  # 추론
  coding: { s: 50.7, z: 0.15, r: 52.3, estimated: false }  # 코딩
  agentic: { s: 40.8, z: 0.17, r: 52.5, estimated: false }  # 에이전트
  trust: { s: 28.7, z: 0.03, r: 50.5, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.01, r: 49.8, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.49, r: 42.6, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.1, r: 48.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Grok 4.3 (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $None/1M · 136.0 t/s · TTFT 0.87s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.06 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.2 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 52.3 | +0.15 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 52.5 | +0.17 | 실측 | [[gdpval]] 30.0%×1.0, [[tau2-bench]] 66.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 50.5 | +0.03 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 49.8 | -0.01 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 42.6 | -0.49 | 실측 | [[aa-lcr]] 25.0%×1.0 |
| 지시 따르기 | 48.5 | -0.1 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
