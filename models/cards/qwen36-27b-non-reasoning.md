---
type: Model
title: Qwen3.6 27B (Non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.9
output_speed_tps: 56.0
context_window: 262000
status: current
size_class: Small
params_b: 27.8
is_reasoning: false
radar:
  knowledge: { s: 39.4, z: -0.06, r: 49.1, estimated: false }  # 전문 지식
  reasoning: { s: 37.7, z: 0.15, r: 52.2, estimated: false }  # 추론
  coding: { s: 50.4, z: 0.14, r: 52.1, estimated: false }  # 코딩
  agentic: { s: 47.4, z: 0.39, r: 55.8, estimated: false }  # 에이전트
  trust: { s: 14.4, z: -0.48, r: 42.8, estimated: false }  # 신뢰성
  multimodal: { s: 80.3, z: 0.48, r: 57.2, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.21, r: 46.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3.6 27B (Non-reasoning)

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 56.0 t/s · TTFT 3.67s · 262k ctx` · 가성비 34.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.1 | -0.06 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 52.2 | +0.15 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 52.1 | +0.14 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 55.8 | +0.39 | 실측 | [[gdpval]] 31.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 57.2 | +0.48 | 실측 | [[mmmu-pro]] 72.0%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 46.8 | -0.21 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
