---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.84
output_speed_tps: 131.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.5, z: -0.09, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: 0.12, r: 51.8, estimated: false }  # 추론
  coding: { s: 56.2, z: 0.3, r: 54.5, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 70.9, z: 1.77, r: 76.6, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.36, r: 55.3, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.57, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.02, r: 50.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $0.84/1M · 131.0 t/s · TTFT 2.28s · 256k ctx` · 가성비 36.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 51.8 | +0.12 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 54.5 | +0.3 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 76.6 | +1.77 | 실측 | [[aa-omniscience]] 63.0%×1.0 |
| 멀티모달 | 55.3 | +0.36 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 58.5 | +0.57 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 50.3 | +0.02 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
