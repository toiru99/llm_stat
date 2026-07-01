---
type: Model
title: DiffusionGemma 26B A4B
creator: Google
license: Open
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
radar:
  knowledge: { s: 34.6, z: -0.82, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.82, r: 37.6, estimated: false }  # 추론
  coding: { s: 56.7, z: -0.18, r: 47.3, estimated: false }  # 코딩
  agentic: { s: 3.6, z: -1.89, r: 21.6, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.9, z: -1.9, r: 21.5, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: -0.09, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DiffusionGemma 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# DiffusionGemma 26B A4B

Google · Open · 컨텍스트 256k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 37.6 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 47.3 | -0.18 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 21.6 | -1.89 | 실측 | [[gdpval]] 2.0%×1.0, [[tau3-banking]] 7.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 21.5 | -1.9 | 실측 | [[aa-lcr]] 14.0%×1.0 |
| 지시 따르기 | 48.7 | -0.09 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
