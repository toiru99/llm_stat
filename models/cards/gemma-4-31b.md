---
type: Model
title: Gemma 4 31B
creator: Google
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.0
output_speed_tps: 35.0
context_window: 256000
radar:
  knowledge: { s: 47.4, z: -0.18, r: 47.3, estimated: false }  # 전문 지식
  reasoning: { s: 45.3, z: 0.04, r: 50.6, estimated: false }  # 추론
  coding: { s: 66.8, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 50.8, z: -0.03, r: 49.6, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: 81.0, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.47, r: 57.1, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.97, r: 64.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-27
timestamp: 2026-06-27T00:00:00Z
---

# Gemma 4 31B

Google · Open · 컨텍스트 256k · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · 35.0 t/s · TTFT 1.07s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.3 | -0.18 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 50.6 | +0.04 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 49.6 | -0.03 | 실측 | [[gdpval]] 14.0%×1.0, [[itbench]] 37.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 57.1 | +0.47 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
