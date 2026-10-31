---
type: Model
title: Qwen3.5 9B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1415
output_speed_tps: 61.0
context_window: 262000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.2, z: 0.34, r: 55.2, estimated: false }  # 전문 지식
  reasoning: { s: 52.9, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 37.7, z: 0.02, r: 50.3, estimated: false }  # 코딩
  agentic: { s: 24.3, z: -0.34, r: 44.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.04, r: 65.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 9B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Qwen3.5 9B

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.14 · 출력 $0.2 · 혼합 $0.1415/1M · 61.0 t/s · TTFT 1.68s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.2 | +0.34 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 50.3 | +0.02 | 실측 | [[scicode]] 30.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 44.9 | -0.34 | 실측 | [[gdpval]] 427.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
