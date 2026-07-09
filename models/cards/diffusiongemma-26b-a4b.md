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
  knowledge: { s: 34.6, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 56.7, z: -0.15, r: 47.7, estimated: false }  # 코딩
  agentic: { s: 12.9, z: -1.5, r: 27.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.99, r: 35.2, estimated: false }  # 신뢰성
  multimodal: { s: 70.7, z: -0.23, r: 46.5, estimated: false }  # 멀티모달
  long_context: { s: 18.9, z: -1.86, r: 22.1, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: -0.07, r: 48.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DiffusionGemma 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-09
timestamp: 2026-07-09T00:00:00Z
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
| 전문 지식 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 47.7 | -0.15 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 27.5 | -1.5 | 실측 | [[gdpval]] 2.0%×1.0, [[tau3-banking]] 7.0%×1.0 |
| 신뢰성 | 35.2 | -0.99 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 46.5 | -0.23 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 22.1 | -1.86 | 실측 | [[aa-lcr]] 14.0%×1.0 |
| 지시 따르기 | 48.9 | -0.07 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
