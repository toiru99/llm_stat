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
params_b: 25.2
is_reasoning: true
radar:
  knowledge: { s: 43.4, z: -0.16, r: 47.6, estimated: false }  # 전문 지식
  reasoning: { s: 26.7, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 32.2, z: -0.53, r: 42.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.4, z: -0.1, r: 48.5, estimated: false }  # 멀티모달
  long_context: { s: 22.2, z: -1.09, r: 33.7, estimated: false }  # 긴문맥
  instruction: { s: 66.5, z: 0.67, r: 60.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DiffusionGemma 26B A4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DiffusionGemma 26B A4B

Google · Open · Small(25.2B) · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 멀티모달
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.6 | -0.16 | 실측 | [[gpqa-diamond]] 66.8687%×0.4, [[humanitys-last-exam]] 10.8434%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 66.8687%×1.0, [[humanitys-last-exam]] 10.8434%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 42.1 | -0.53 | 실측 | [[gdpval]] 328.24 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.5 | -0.1 | 실측 | [[mmmu-pro]] 66.5318%×1.0 |
| 긴문맥 | 33.7 | -1.09 | 실측 | [[aa-lcr]] 19.6667%×1.0 |
| 지시 따르기 | 60.0 | +0.67 | 실측 | [[ifbench]] 59.4558%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
