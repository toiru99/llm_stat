---
type: Model
title: Gemma 4 12B (Non-reasoning)
creator: Google
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.12
output_speed_tps: 107.0
context_window: 262000
status: current
size_class: Small
params_b: 12
is_reasoning: false
radar:
  knowledge: { s: 27.6, z: -0.63, r: 40.5, estimated: false }  # 전문 지식
  reasoning: { s: 24.8, z: -0.48, r: 42.8, estimated: false }  # 추론
  coding: { s: 37.8, z: -0.38, r: 44.4, estimated: false }  # 코딩
  agentic: { s: 24.5, z: -0.49, r: 42.6, estimated: false }  # 에이전트
  trust: { s: 25.8, z: 0.07, r: 51.0, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.19, r: 47.1, estimated: false }  # 멀티모달
  long_context: { s: 37.3, z: -0.38, r: 44.3, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.26, r: 46.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Gemma 4 12B (Non-reasoning)

Google · Open · Small(12B) · 컨텍스트 262k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 멀티모달
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 107.0 t/s · TTFT 2.41s · 262k ctx` · 가성비 108.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.5 | -0.63 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.8 | -0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 44.4 | -0.38 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 42.6 | -0.49 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 51.0 | +0.07 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 47.1 | -0.19 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 44.3 | -0.38 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 46.1 | -0.26 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
