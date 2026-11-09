---
type: Model
title: Qwen3.8-Flash-Next
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0882
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.7, z: 1.39, r: 70.8, estimated: false }  # 전문 지식
  reasoning: { s: 78.3, z: 1.48, r: 72.1, estimated: false }  # 추론
  coding: { s: 72.8, z: 1.18, r: 67.7, estimated: false }  # 코딩
  agentic: { s: 88.1, z: 1.84, r: 77.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 84.3, z: 1.33, r: 70.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8-Flash-Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Qwen3.8-Flash-Next

Alibaba · Open · Large · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.47 · 혼합 $0.0882/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.8 | +1.39 | 실측 | [[gpqa-diamond]] 92.3%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 72.1 | +1.48 | 실측 | [[gpqa-diamond]] 92.3%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 67.7 | +1.18 | 실측 | [[scicode]] 50.6%×1.0 |
| 에이전트 | 77.5 | +1.84 | 실측 | [[gdpval]] 1636.0%×1.0, [[tau3-banking]] 45.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 79.7%×1.0 |
| 지시 따르기 | 70.0 | +1.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
