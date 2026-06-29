---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.12
output_speed_tps: 124.0
context_window: 256000
radar:
  knowledge: { s: 37.6, z: -0.61, r: 40.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 51.7, z: -0.32, r: 45.2, estimated: false }  # 코딩
  agentic: { s: 32.5, z: -0.74, r: 38.9, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.52, r: 42.2, estimated: false }  # 신뢰성
  multimodal: { s: 75.9, z: 0.04, r: 50.5, estimated: false }  # 멀티모달
  long_context: { s: 74.3, z: 0.13, r: 52.0, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 0.85, r: 62.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-29
timestamp: 2026-06-29T00:00:00Z
---

# Gemma 4 12B

Google · Open · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 124.0 t/s · TTFT 2.39s · 256k ctx` · 가성비 183.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.9 | -0.61 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 45.2 | -0.32 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 38.9 | -0.74 | 실측 | [[tau2-bench]] 36.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 42.2 | -0.52 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 50.5 | +0.04 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 52.0 | +0.13 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 62.8 | +0.85 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
