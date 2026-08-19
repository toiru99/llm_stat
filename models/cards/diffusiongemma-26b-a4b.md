---
type: Model
title: DiffusionGemma 26B A4B
creator: Google
license: Open
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: 25.2
is_reasoning: true
radar:
  knowledge: { s: 33.8, z: -0.36, r: 44.6, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 56.7, z: 0.34, r: 55.1, estimated: false }  # 코딩
  agentic: { s: 4.5, z: -1.26, r: 31.0, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 21.7, z: -0.87, r: 36.9, estimated: false }  # 긴문맥
  instruction: { s: 66.2, z: 0.48, r: 57.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DiffusionGemma 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# DiffusionGemma 26B A4B

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 55.1 | +0.34 | 실측 | [[scicode]] 34.0%×1.0 |
| 에이전트 | 31.0 | -1.26 | 실측 | [[gdpval]] 3.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 36.9 | -0.87 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 57.2 | +0.48 | 실측 | [[ifbench]] 59.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
