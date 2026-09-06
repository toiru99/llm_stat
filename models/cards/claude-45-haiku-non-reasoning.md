---
type: Model
title: Claude 4.5 Haiku (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 0.77
output_speed_tps: 84.0
context_window: 200000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.3, z: -0.61, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 23.0, z: -0.58, r: 41.3, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.3, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 36.6, z: -0.03, r: 49.5, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.35, r: 85.2, estimated: false }  # 신뢰성
  multimodal: { s: 55.6, z: -0.72, r: 39.2, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.44, r: 43.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude 4.5 Haiku (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 84.0 t/s · TTFT 0.78s · 200k ctx` · 가성비 22.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.61 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.3 | -0.58 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 54.6 | +0.3 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 49.5 | -0.03 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 85.2 | +2.35 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 39.2 | -0.72 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 43.5 | -0.44 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
