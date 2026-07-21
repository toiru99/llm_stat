---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: None
output_speed_tps: 60.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.7, z: -0.09, r: 48.6, estimated: false }  # 전문 지식
  reasoning: { s: 35.9, z: 0.11, r: 51.7, estimated: false }  # 추론
  coding: { s: 43.2, z: -0.13, r: 48.0, estimated: false }  # 코딩
  agentic: { s: 39.9, z: 0.14, r: 52.1, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.31, r: 45.3, estimated: false }  # 신뢰성
  multimodal: { s: 78.3, z: 0.32, r: 54.8, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.86, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.15 · 혼합 $None/1M · 60.0 t/s · TTFT 1.77s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 51.7 | +0.11 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 48.0 | -0.13 | 실측 | [[scicode]] 28.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 52.1 | +0.14 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 87.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 45.3 | -0.31 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 54.8 | +0.32 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 62.8 | +0.86 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
