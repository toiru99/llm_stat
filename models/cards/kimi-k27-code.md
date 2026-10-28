---
type: Model
title: Kimi K2.7 Code
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.723
output_speed_tps: 80.0
context_window: 256000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.24, r: 68.5, estimated: false }  # 전문 지식
  reasoning: { s: 74.8, z: 1.31, r: 69.7, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.05, r: 65.7, estimated: false }  # 코딩
  agentic: { s: 54.5, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.8, r: 62.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.7 Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Kimi K2.7 Code

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.723/1M · 80.0 t/s · TTFT 2.71s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.5 | +1.24 | 실측 | [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 69.7 | +1.31 | 실측 | [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 65.7 | +1.05 | 실측 | [[scicode]] 48.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[gdpval]] 1046.0%×1.0, [[tau3-banking]] 20.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
