---
type: Model
title: Gemma 4 12B (Non-reasoning)
creator: Google
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.12
output_speed_tps: 32.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.2, z: -0.59, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.42, r: 43.6, estimated: false }  # 추론
  coding: { s: 38.9, z: -0.3, r: 45.5, estimated: false }  # 코딩
  agentic: { s: 24.5, z: -0.45, r: 43.2, estimated: false }  # 에이전트
  trust: { s: 30.6, z: 0.12, r: 51.9, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.16, r: 47.6, estimated: false }  # 멀티모달
  long_context: { s: 40.8, z: -0.22, r: 46.6, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.24, r: 46.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Gemma 4 12B (Non-reasoning)

Google · Open · Unknown · 컨텍스트 262k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 멀티모달
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 32.0 t/s · TTFT 2.88s · 262k ctx` · 가성비 108.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.59 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.6 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 45.5 | -0.3 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 43.2 | -0.45 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 51.9 | +0.12 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 47.6 | -0.16 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 46.6 | -0.22 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 46.4 | -0.24 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
