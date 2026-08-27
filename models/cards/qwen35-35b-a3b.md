---
type: Model
title: Qwen3.5 35B A3B
creator: Alibaba
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.425
output_speed_tps: 151.0
context_window: 262000
status: current
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 44.8, z: 0.16, r: 52.4, estimated: false }  # 전문 지식
  reasoning: { s: 42.8, z: 0.34, r: 55.1, estimated: false }  # 추론
  coding: { s: 55.9, z: 0.29, r: 54.3, estimated: false }  # 코딩
  agentic: { s: 56.3, z: 0.73, r: 61.0, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.49, r: 57.4, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.93, r: 64.0, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.28, r: 69.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen3.5 35B A3B

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 151.0 t/s · TTFT 2.14s · 262k ctx` · 가성비 70.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.4 | +0.16 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 55.1 | +0.34 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 54.3 | +0.29 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 61.0 | +0.73 | 실측 | [[itbench]] 22.0%×1.0, [[tau2-bench]] 89.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 57.4 | +0.49 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 64.0 | +0.93 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 69.3 | +1.28 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
