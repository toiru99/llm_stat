---
type: Model
title: Qwen3 Coder Next
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.3615
output_speed_tps: 80.0
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 49.0, z: -0.02, r: 49.7, estimated: false }  # 전문 지식
  reasoning: { s: 44.7, z: -0.05, r: 49.3, estimated: false }  # 추론
  coding: { s: 41.3, z: 0.14, r: 52.1, estimated: false }  # 코딩
  agentic: { s: 21.7, z: -0.43, r: 43.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 52.8, z: 0.02, r: 50.2, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.85, r: 37.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Qwen3 Coder Next

Alibaba · Open · Medium · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.31 · 출력 $1.0 · 혼합 $0.3615/1M · 80.0 t/s · TTFT 0.9s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.7 | -0.02 | 실측 | [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 49.3 | -0.05 | 실측 | [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 52.1 | +0.14 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 43.5 | -0.43 | 실측 | [[gdpval]] 522.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 50.2 | +0.02 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 37.2 | -0.85 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
