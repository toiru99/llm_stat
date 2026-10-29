---
type: Model
title: Gemma 4 E4B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.028
output_speed_tps: 48.0
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.8, z: -0.74, r: 39.0, estimated: false }  # 전문 지식
  reasoning: { s: 29.5, z: -0.74, r: 39.0, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -0.76, r: 38.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 49.3, z: -1.13, r: 33.0, estimated: false }  # 멀티모달
  long_context: { s: 27.0, z: -0.76, r: 38.6, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.5, r: 42.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 E4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemma 4 E4B (non-reasoning)

Google · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $0.02 · 출력 $0.1 · 혼합 $0.028/1M · 48.0 t/s · TTFT 0.94s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.0 | -0.74 | 실측 | [[gpqa-diamond]] 55.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.0 | -0.74 | 실측 | [[gpqa-diamond]] 55.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 38.6 | -0.76 | 실측 | [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 33.0 | -1.13 | 실측 | [[mmmu-pro]] 51.0%×1.0 |
| 긴문맥 | 38.6 | -0.76 | 실측 | [[aa-lcr]] 24.0%×1.0 |
| 지시 따르기 | 42.5 | -0.5 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
