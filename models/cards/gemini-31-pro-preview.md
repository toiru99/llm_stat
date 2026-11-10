---
type: Model
title: Gemini 3.1 Pro Preview
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.6, z: 1.72, r: 75.8, estimated: false }  # 전문 지식
  reasoning: { s: 80.1, z: 1.8, r: 77.1, estimated: false }  # 추론
  coding: { s: 84.0, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 57.4, z: 0.76, r: 61.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.5, z: 0.96, r: 64.5, estimated: false }  # 멀티모달
  long_context: { s: 92.4, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 91.3, z: 1.66, r: 74.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Gemini 3.1 Pro Preview

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.8 | +1.72 | 실측 | [[gpqa-diamond]] 94.1%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 77.1 | +1.8 | 실측 | [[gpqa-diamond]] 94.1%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 58.7%×1.0, [[terminal-bench]] 53.8%×0.5 |
| 에이전트 | 61.5 | +0.76 | 실측 | [[apex-agents]] 32.0%×1.0, [[gdpval]] 799.0%×1.0, [[itbench]] 30.3%×1.0, [[tau3-banking]] 21.4%×1.0, [[terminal-bench]] 53.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.5 | +0.96 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 74.8 | +1.66 | 실측 | [[ifbench]] 77.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
