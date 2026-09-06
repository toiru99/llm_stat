---
type: Model
title: Gemma 4 E4B (Non-reasoning)
creator: Google
license: Open
intelligence_index: 3.0
price_blended_usd_1m: 0.028
output_speed_tps: 38.0
context_window: 128000
status: current
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 20.6, z: -0.98, r: 35.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.7, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.7, r: 39.5, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.7, r: 39.5, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.98, r: 64.8, estimated: false }  # 신뢰성
  multimodal: { s: 50.0, z: -1.0, r: 35.0, estimated: false }  # 멀티모달
  long_context: { s: 27.0, z: -0.68, r: 39.8, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemma 4 E4B (Non-reasoning)

Google · Open · Small(8B) · 컨텍스트 128k · 종합지능 **3.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $0.028/1M · 38.0 t/s · TTFT 0.92s · 128k ctx` · 가성비 107.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.3 | -0.98 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 55.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 39.5 | -0.7 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.5 | -0.7 | 실측 | [[tau2-bench]] 26.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 64.8 | +0.98 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 35.0 | -1.0 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 39.8 | -0.68 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 42.6 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
