---
type: Model
title: Llama 4 Maverick
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.315
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.1, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: -0.37, r: 44.4, estimated: false }  # 추론
  coding: { s: 30.6, z: -0.24, r: 46.4, estimated: false }  # 코딩
  agentic: { s: 10.5, z: -0.83, r: 37.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 56.4, z: 0.1, r: 51.4, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.41, r: 43.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Maverick
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Llama 4 Maverick

Meta · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.315/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[gpqa-diamond]] 67.1%×0.4, [[humanitys-last-exam]] 4.9%×0.3 |
| 추론 | 44.4 | -0.37 | 실측 | [[gpqa-diamond]] 67.1%×1.0, [[humanitys-last-exam]] 4.9%×1.0 |
| 코딩 | 46.4 | -0.24 | 실측 | [[scicode]] 31.7%×1.0, [[terminal-bench]] 6.8%×0.5 |
| 에이전트 | 37.6 | -0.83 | 실측 | [[gdpval]] 268.0%×1.0, [[tau3-banking]] 3.7%×1.0, [[terminal-bench]] 6.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 51.4 | +0.1 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 43.8 | -0.41 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
