---
type: Model
title: Gemma 4 E4B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.028
output_speed_tps: 47.0
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 34.0, z: -0.68, r: 39.8, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.69, r: 39.6, estimated: false }  # 추론
  coding: { s: 22.9, z: -0.48, r: 42.9, estimated: false }  # 코딩
  agentic: { s: 6.8, z: -0.94, r: 35.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 49.3, z: -1.13, r: 33.0, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.49, r: 42.7, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemma 4 E4B

Google · Open · Unknown · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $0.028/1M · 47.0 t/s · TTFT 1.0s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.8 | -0.68 | 실측 | [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.6 | -0.69 | 실측 | [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 42.9 | -0.48 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 35.9 | -0.94 | 실측 | [[gdpval]] 29.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 33.0 | -1.13 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 42.7 | -0.49 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
