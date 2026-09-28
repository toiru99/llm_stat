---
type: Model
title: Gemma 4 31B (Non-reasoning)
creator: Google
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.166
output_speed_tps: 54.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 36.2, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 45.5, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 32.9, z: -0.19, r: 47.2, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.43, r: 43.5, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.25, r: 53.7, estimated: false }  # 멀티모달
  long_context: { s: 52.8, z: 0.07, r: 51.0, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.17, r: 52.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# Gemma 4 31B (Non-reasoning)

Google · Open · Small · 컨텍스트 256k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.4 · 혼합 $0.166/1M · 54.0 t/s · TTFT 2.09s · 256k ctx` · 가성비 84.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 76.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 76.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 47.2 | -0.19 | 실측 | [[gdpval]] 2.0%×1.0, [[tau2-bench]] 65.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 43.5 | -0.43 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 53.7 | +0.25 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 51.0 | +0.07 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 52.6 | +0.17 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
