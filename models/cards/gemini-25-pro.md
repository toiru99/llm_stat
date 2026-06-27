---
type: Model
title: Gemini 2.5 Pro
creator: Google
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 1.34
output_speed_tps: 133.0
context_window: 1000000
radar:
  knowledge: { s: 64.7, z: 0.6, r: 59.0, estimated: false }  # 전문 지식
  reasoning: { s: 45.4, z: 0.04, r: 50.6, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.11, r: 51.7, estimated: false }  # 코딩
  agentic: { s: 29.7, z: -0.86, r: 37.2, estimated: false }  # 에이전트
  trust: { s: 11.2, z: -0.79, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: 84.5, z: 0.47, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 0.66, r: 60.0, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.62, r: 40.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-27
timestamp: 2026-06-27T00:00:00Z
---

# Gemini 2.5 Pro

Google · Proprietary · 컨텍스트 1M · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · 133.0 t/s · TTFT 21.07s · 1M ctx` · 가성비 19.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.0 | +0.6 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 50.6 | +0.04 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 51.7 | +0.11 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 37.2 | -0.86 | 실측 | [[gdpval]] 6.0%×1.0, [[tau2-bench]] 54.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 38.1 | -0.79 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 57.1 | +0.47 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 60.0 | +0.66 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 40.7 | -0.62 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
