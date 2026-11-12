---
type: Model
title: Qwen3.8 Max (0902)
creator: Alibaba
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.175
output_speed_tps: None
context_window: 984000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.57, r: 73.5, estimated: false }  # 전문 지식
  reasoning: { s: 64.0, z: 1.02, r: 65.3, estimated: false }  # 추론
  coding: { s: 74.3, z: 1.23, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 86.0, z: 1.74, r: 76.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.9, z: 1.03, r: 65.5, estimated: false }  # 멀티모달
  long_context: { s: 90.5, z: 1.13, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.81, r: 62.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 Max (0902)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Qwen3.8 Max (0902)

Alibaba · Proprietary · Unknown · 컨텍스트 984k · 종합지능 **34.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $1.175/1M · None t/s · TTFT Nones · 984k ctx` · 가성비 28.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.5 | +1.57 | 실측 | [[gpqa-diamond]] 92.8%×0.4, [[humanitys-last-exam]] 43.1%×0.3 |
| 추론 | 65.3 | +1.02 | 실측 | [[critpt]] 29.5%×1.0, [[gpqa-diamond]] 92.8%×1.0, [[humanitys-last-exam]] 43.1%×1.0 |
| 코딩 | 68.5 | +1.23 | 실측 | [[scicode]] 52.1%×1.0 |
| 에이전트 | 76.1 | +1.74 | 실측 | [[apex-agents]] 42.4%×1.0, [[gdpval]] 1674.0%×1.0, [[itbench]] 40.3%×1.0, [[tau3-banking]] 47.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.5 | +1.03 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 66.9 | +1.13 | 실측 | [[aa-lcr]] 80.3%×1.0 |
| 지시 따르기 | 62.1 | +0.81 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
