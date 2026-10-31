---
type: Model
title: Llama 4 Maverick
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.296
output_speed_tps: 48.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.7, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: -0.41, r: 43.8, estimated: false }  # 추론
  coding: { s: 31.3, z: -0.19, r: 47.1, estimated: false }  # 코딩
  agentic: { s: 10.9, z: -0.8, r: 38.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.38, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Maverick
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Llama 4 Maverick

Meta · Open · Large · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $0.92 · 혼합 $0.296/1M · 48.0 t/s · TTFT 0.97s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.8 | -0.41 | 실측 | [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 47.1 | -0.19 | 실측 | [[scicode]] 32.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 38.0 | -0.8 | 실측 | [[gdpval]] 268.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.2 | -0.38 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
