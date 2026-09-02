---
type: Model
title: Qwen3.5 397B A17B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 33.0
price_blended_usd_1m: 0.9
output_speed_tps: 87.0
context_window: 262000
status: current
size_class: Large
params_b: 397
is_reasoning: false
radar:
  knowledge: { s: 48.8, z: 0.42, r: 56.3, estimated: false }  # 전문 지식
  reasoning: { s: 41.8, z: 0.37, r: 55.5, estimated: false }  # 추론
  coding: { s: 62.3, z: 0.66, r: 59.9, estimated: false }  # 코딩
  agentic: { s: 69.7, z: 1.27, r: 69.0, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.42, r: 43.7, estimated: false }  # 신뢰성
  multimodal: { s: 54.3, z: -0.82, r: 37.7, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.76, r: 61.4, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.15, r: 52.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 397B A17B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3.5 397B A17B (Non-reasoning)

Alibaba · Open · Large(397B) · 컨텍스트 262k · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 87.0 t/s · TTFT 2.21s · 262k ctx` · 가성비 36.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.3 | +0.42 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 55.5 | +0.37 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 59.9 | +0.66 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 69.0 | +1.27 | 실측 | [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 43.7 | -0.42 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 37.7 | -0.82 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 61.4 | +0.76 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 52.3 | +0.15 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
