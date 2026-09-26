---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: 0.84
output_speed_tps: 107.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.0, z: -0.12, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.11, r: 48.3, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.87, r: 63.1, estimated: false }  # 에이전트
  trust: { s: 62.9, z: 1.74, r: 76.1, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.32, r: 54.8, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.06, r: 50.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $0.84/1M · 107.0 t/s · TTFT 2.11s · 256k ctx` · 가성비 23.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.12 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 48.3 | -0.11 | 실측 | [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 63.1 | +0.87 | 실측 | [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 76.1 | +1.74 | 실측 | [[aa-omniscience]] 63.0%×1.0 |
| 멀티모달 | 54.8 | +0.32 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 50.9 | +0.06 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
