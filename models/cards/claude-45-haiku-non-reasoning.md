---
type: Model
title: Claude 4.5 Haiku (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 0.77
output_speed_tps: 86.0
context_window: 200000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.4, z: -0.6, r: 41.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.57, r: 41.5, estimated: false }  # 추론
  coding: { s: 50.2, z: 0.13, r: 52.0, estimated: false }  # 코딩
  agentic: { s: 36.6, z: -0.03, r: 49.5, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.34, r: 85.1, estimated: false }  # 신뢰성
  multimodal: { s: 56.3, z: -0.7, r: 39.5, estimated: false }  # 멀티모달
  long_context: { s: 57.8, z: 0.23, r: 53.5, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude 4.5 Haiku (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **24.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 86.0 t/s · TTFT 0.74s · 200k ctx` · 가성비 31.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.5 | -0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 52.0 | +0.13 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 49.5 | -0.03 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 85.1 | +2.34 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 39.5 | -0.7 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 53.5 | +0.23 | 실측 | [[aa-lcr]] 48.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
