---
type: Model
title: Hy3
creator: Tencent
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1065
output_speed_tps: 81.0
context_window: 256000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.0, z: 1.17, r: 67.6, estimated: false }  # 전문 지식
  reasoning: { s: 73.2, z: 1.24, r: 68.6, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.1, r: 66.6, estimated: false }  # 코딩
  agentic: { s: 51.2, z: 0.59, r: 58.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.09, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 87.9, z: 1.47, r: 72.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Hy3

Tencent · Open · Large · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.14 · 출력 $0.55 · 혼합 $0.1065/1M · 81.0 t/s · TTFT 2.76s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.6 | +1.17 | 실측 | [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 68.6 | +1.24 | 실측 | [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 66.6 | +1.1 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 58.8 | +0.59 | 실측 | [[gdpval]] 1071.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.4 | +1.09 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 72.0 | +1.47 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
