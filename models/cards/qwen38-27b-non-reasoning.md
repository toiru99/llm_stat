---
type: Model
title: Qwen3.8 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: 10.0316676028892
price_blended_usd_1m: 0.47
output_speed_tps: 42.1289581763463
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.1, z: 0.33, r: 54.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.1, z: -0.12, r: 48.1, estimated: false }  # 추론
  coding: { s: 48.2, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 52.1, z: 0.25, r: 53.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.9, z: 0.13, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 78.2, z: 0.73, r: 60.9, estimated: false }  # 긴문맥
  instruction: { s: 73.7, z: 0.83, r: 62.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Qwen3.8 27B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **10.0316676028892**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 42.1289581763463 t/s · TTFT 5.10728781749303s · 256k ctx` · 가성비 21.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.9 | +0.33 | 실측 | [[gpqa-diamond]] 81.8181818181818%×0.4, [[humanitys-last-exam]] 12.1408711770158%×0.3 |
| 추론 | 48.1 | -0.12 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 81.8181818181818%×1.0, [[humanitys-last-exam]] 12.1408711770158%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[scicode]] 36.2268518518519%×1.0 |
| 에이전트 | 53.7 | +0.25 | 실측 | [[gdpval]] 1081.15%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.9 | +0.13 | 실측 | [[mmmu-pro]] 69.9421965317919%×1.0 |
| 긴문맥 | 60.9 | +0.73 | 실측 | [[aa-lcr]] 69.3333333333333%×1.0 |
| 지시 따르기 | 62.4 | +0.83 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
