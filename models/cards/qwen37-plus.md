---
type: Model
title: Qwen3.7 Plus
creator: Alibaba
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 0.268
output_speed_tps: 57.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.1, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 62.7, z: 1.38, r: 70.7, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.1, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 55.8, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: 81.4, z: 2.53, r: 87.9, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.01, r: 65.2, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.62, r: 74.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Qwen3.7 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.268/1M · 57.0 t/s · TTFT 2.44s · 1M ctx` · 가성비 145.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 70.7 | +1.38 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 66.4 | +1.1 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[apex-agents]] 22.0%×1.0, [[gdpval]] 22.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 87.9 | +2.53 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | 65.2 | +1.01 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 74.3 | +1.62 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
