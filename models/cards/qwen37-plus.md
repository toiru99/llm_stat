---
type: Model
title: Qwen3.7 Plus
creator: Alibaba
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 0.268
output_speed_tps: 56.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.9, z: 0.59, r: 58.8, estimated: false }  # 전문 지식
  reasoning: { s: 61.6, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 57.2, z: 0.86, r: 62.9, estimated: false }  # 에이전트
  trust: { s: 85.1, z: 2.58, r: 88.7, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.64, r: 74.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Qwen3.7 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.268/1M · 56.0 t/s · TTFT 2.37s · 1M ctx` · 가성비 145.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.8 | +0.59 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 62.9 | +0.86 | 실측 | [[apex-agents]] 22.0%×1.0, [[gdpval]] 22.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 88.7 | +2.58 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 74.5 | +1.64 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
