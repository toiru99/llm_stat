---
type: Model
title: Gemini 3.5 Flash (minimal)
creator: Google
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.31
output_speed_tps: 160.0
context_window: 1000000
radar:
  knowledge: { s: 69.1, z: 0.81, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 44.1, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 78.8, z: 0.84, r: 62.6, estimated: false }  # 코딩
  agentic: { s: 66.3, z: 0.6, r: 59.0, estimated: false }  # 에이전트
  trust: { s: 28.7, z: -0.16, r: 47.6, estimated: false }  # 신뢰성
  multimodal: { s: 93.1, z: 0.91, r: 63.6, estimated: false }  # 멀티모달
  long_context: { s: 71.6, z: 0.05, r: 50.8, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.74, r: 38.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Gemini 3.5 Flash (minimal)

Google · Proprietary · 컨텍스트 1M · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.31/1M · 160.0 t/s · TTFT 0.97s · 1M ctx` · 가성비 26.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.81 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 62.6 | +0.84 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 59.0 | +0.6 | 실측 | [[tau2-bench]] 59.0%×1.0, [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 47.6 | -0.16 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 63.6 | +0.91 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 50.8 | +0.05 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 38.9 | -0.74 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
