---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.42
output_speed_tps: 133.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 46.1, z: 0.27, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.0, z: 0.49, r: 57.3, estimated: false }  # 추론
  coding: { s: 55.9, z: 0.4, r: 56.0, estimated: false }  # 코딩
  agentic: { s: 56.3, z: 0.78, r: 61.7, estimated: false }  # 에이전트
  trust: { s: 17.6, z: -0.48, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: 84.1, z: 0.59, r: 58.9, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.38, r: 70.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.42/1M · 133.0 t/s · TTFT 2.14s · 262k ctx` · 가성비 69.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.27 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 57.3 | +0.49 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 56.0 | +0.4 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 61.7 | +0.78 | 실측 | [[itbench]] 22.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 42.9 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 58.9 | +0.59 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 70.7 | +1.38 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
