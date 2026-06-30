---
type: Model
title: Gemma 4 26B A4B
creator: Google
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.14
output_speed_tps: None
context_window: 256000
radar:
  knowledge: { s: 41.7, z: -0.42, r: 43.6, estimated: false }  # 전문 지식
  reasoning: { s: 38.2, z: -0.29, r: 45.7, estimated: false }  # 추론
  coding: { s: 51.9, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 32.3, z: -0.71, r: 39.4, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.51, r: 42.3, estimated: false }  # 신뢰성
  multimodal: { s: 74.1, z: -0.05, r: 49.2, estimated: false }  # 멀티모달
  long_context: { s: 75.7, z: 0.19, r: 52.9, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Gemma 4 26B A4B

Google · Open · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.14/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 185.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.6 | -0.42 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 45.7 | -0.29 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 39.4 | -0.71 | 실측 | [[gdpval]] 13.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 44.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 42.3 | -0.51 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 49.2 | -0.05 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 52.9 | +0.19 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
