---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.12
output_speed_tps: 113.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.9, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 50.3, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 27.3, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 25.3, z: -0.31, r: 45.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.45, r: 71.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Gemma 4 12B

Google · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 113.0 t/s · TTFT 2.22s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 45.4 | -0.31 | 실측 | [[gdpval]] 435.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 71.8 | +1.45 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
