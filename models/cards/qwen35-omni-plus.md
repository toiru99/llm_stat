---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: None
output_speed_tps: 52.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: 0.2, r: 53.0, estimated: false }  # 추론
  coding: { s: 56.2, z: 0.39, r: 55.8, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.93, r: 63.9, estimated: false }  # 에이전트
  trust: { s: 72.4, z: 2.08, r: 81.3, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.41, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.6, r: 59.0, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.08, r: 51.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $None/1M · 52.0 t/s · TTFT 2.36s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 53.0 | +0.2 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 55.8 | +0.39 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 63.9 | +0.93 | 실측 | [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 81.3 | +2.08 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | 56.1 | +0.41 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 59.0 | +0.6 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 51.1 | +0.08 | 실측 | [[ifbench]] 51.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
