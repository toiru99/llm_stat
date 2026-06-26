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
  knowledge: { s: 41.7, z: -0.43, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 38.2, z: -0.3, r: 45.5, estimated: false }  # 추론
  coding: { s: 51.9, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 31.6, z: -0.79, r: 38.2, estimated: false }  # 에이전트
  trust: { s: 18.8, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 74.1, z: -0.05, r: 49.2, estimated: false }  # 멀티모달
  long_context: { s: 75.7, z: 0.18, r: 52.7, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 0.73, r: 61.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-26
timestamp: 2026-06-26T00:00:00Z
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
| 전문 지식 | 43.5 | -0.43 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 45.5 | -0.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 14.0%×0.5 |
| 에이전트 | 38.2 | -0.79 | 실측 | [[gdpval]] 11.0%×1.0, [[itbench]] 24.0%×1.0, [[tau2-bench]] 44.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 14.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 49.2 | -0.05 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 52.7 | +0.18 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 61.0 | +0.73 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
