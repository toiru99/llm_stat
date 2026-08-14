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
  knowledge: { s: 53.8, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 62.4, z: 1.32, r: 69.8, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.05, r: 65.7, estimated: false }  # 코딩
  agentic: { s: 55.8, z: 0.75, r: 61.3, estimated: false }  # 에이전트
  trust: { s: 81.4, z: 2.41, r: 86.2, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 0.99, r: 64.8, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.58, r: 73.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Qwen3.7 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.268/1M · 56.0 t/s · TTFT 2.21s · 1M ctx` · 가성비 145.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 69.8 | +1.32 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 65.7 | +1.05 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 61.3 | +0.75 | 실측 | [[apex-agents]] 22.0%×1.0, [[gdpval]] 22.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 86.2 | +2.41 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | 64.8 | +0.99 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 73.7 | +1.58 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
