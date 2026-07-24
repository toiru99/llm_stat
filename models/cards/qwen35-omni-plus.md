---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: None
output_speed_tps: 50.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: 0.24, r: 53.6, estimated: false }  # 추론
  coding: { s: 56.2, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.94, r: 64.0, estimated: false }  # 에이전트
  trust: { s: 72.4, z: 2.12, r: 81.8, estimated: false }  # 신뢰성
  multimodal: { s: 81.2, z: 0.44, r: 56.6, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.61, r: 59.2, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.09, r: 51.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $None/1M · 50.0 t/s · TTFT 2.4s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 53.6 | +0.24 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 64.0 | +0.94 | 실측 | [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 81.8 | +2.12 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | 56.6 | +0.44 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 59.2 | +0.61 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 51.3 | +0.09 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
