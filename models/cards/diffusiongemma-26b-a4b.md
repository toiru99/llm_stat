---
type: Model
title: DiffusionGemma 26B A4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.4, z: -0.19, r: 47.2, estimated: false }  # 전문 지식
  reasoning: { s: 26.7, z: -0.44, r: 43.4, estimated: false }  # 추론
  coding: { s: 12.4, z: -0.94, r: 36.0, estimated: true }  # 코딩
  agentic: { s: 32.2, z: -0.44, r: 43.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.4, z: -0.1, r: 48.5, estimated: false }  # 멀티모달
  long_context: { s: 22.2, z: -0.93, r: 36.0, estimated: false }  # 긴문맥
  instruction: { s: 66.5, z: 0.53, r: 57.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DiffusionGemma 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# DiffusionGemma 26B A4B

Google · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 멀티모달
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.2 | -0.19 | 실측 | [[gpqa-diamond]] 66.8686868686869%×0.4, [[humanitys-last-exam]] 10.8433734939759%×0.3 |
| 추론 | 43.4 | -0.44 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 66.8686868686869%×1.0, [[humanitys-last-exam]] 10.8433734939759%×1.0 |
| 코딩 | 36.0 | -0.94 | 추정 | (추정) |
| 에이전트 | 43.4 | -0.44 | 실측 | [[gdpval]] 328.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.5 | -0.1 | 실측 | [[mmmu-pro]] 66.5317919075144%×1.0 |
| 긴문맥 | 36.0 | -0.93 | 실측 | [[aa-lcr]] 19.6666666666667%×1.0 |
| 지시 따르기 | 57.9 | +0.53 | 실측 | [[ifbench]] 59.4557823129252%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
