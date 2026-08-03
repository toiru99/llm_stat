---
type: Model
title: Qwen3.6 Plus
creator: Alibaba
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: 56.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.8, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 50.1, z: 0.78, r: 61.8, estimated: false }  # 추론
  coding: { s: 67.8, z: 0.86, r: 62.9, estimated: false }  # 코딩
  agentic: { s: 64.9, z: 1.11, r: 66.6, estimated: false }  # 에이전트
  trust: { s: 77.0, z: 2.32, r: 84.8, estimated: false }  # 신뢰성
  multimodal: { s: 90.0, z: 0.88, r: 63.3, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.47, r: 72.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Qwen3.6 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $None/1M · 56.0 t/s · TTFT 2.11s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 61.8 | +0.78 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 62.9 | +0.86 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 66.6 | +1.11 | 실측 | [[gdpval]] 32.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 16.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 84.8 | +2.32 | 실측 | [[aa-omniscience]] 68.0%×1.0 |
| 멀티모달 | 63.3 | +0.88 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 72.1 | +1.47 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
