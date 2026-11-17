---
type: Model
title: Qwen3 Coder Next
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.3615
output_speed_tps: 61.125291222363046
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 47.6, z: 0.02, r: 50.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.8, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 41.3, z: 0.05, r: 50.8, estimated: false }  # 코딩
  agentic: { s: 39.7, z: -0.17, r: 47.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 53.0, z: -0.01, r: 49.9, estimated: false }  # 긴문맥
  instruction: { s: 32.5, z: -0.89, r: 36.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Qwen3 Coder Next

Alibaba · Open · Medium · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.31 · 출력 $1.0 · 혼합 $0.3615/1M · 61.125291222363046 t/s · TTFT 1.6352381616439504s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.3 | +0.02 | 실측 | [[gpqa-diamond]] 73.7373737373737%×0.4, [[humanitys-last-exam]] 10.1482854494903%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.7373737373737%×1.0, [[humanitys-last-exam]] 10.1482854494903%×1.0 |
| 코딩 | 50.8 | +0.05 | 실측 | [[scicode]] 36.2268518518519%×1.0, [[terminal-bench]] 18.181818181818198%×0.5 |
| 에이전트 | 47.4 | -0.17 | 실측 | [[gdpval]] 521.05%×1.0, [[tau2-bench]] 79.5321637426901%×1.0, [[tau3-banking]] 5.36082474226804%×1.0, [[terminal-bench]] 18.181818181818198%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.9 | -0.01 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 36.7 | -0.89 | 실측 | [[ifbench]] 35.2380952380952%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
