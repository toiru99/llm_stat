---
type: Model
title: Qwen3.8-Flash-Next
creator: Alibaba
license: Open
intelligence_index: 40.0
price_blended_usd_1m: 0.0882
output_speed_tps: 54.0
context_window: 256000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.3, z: 0.59, r: 58.8, estimated: false }  # 전문 지식
  reasoning: { s: 63.8, z: 1.24, r: 68.6, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.26, r: 69.0, estimated: false }  # 코딩
  agentic: { s: 85.9, z: 1.8, r: 77.0, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.31, r: 69.6, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.88, r: 63.2, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 79.3, z: 1.04, r: 65.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8-Flash-Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Qwen3.8-Flash-Next

Alibaba · Open · Large · 컨텍스트 256k · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.47 · 혼합 $0.0882/1M · 54.0 t/s · TTFT 2.46s · 256k ctx` · 가성비 453.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.8 | +0.59 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 68.6 | +1.24 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 69.0 | +1.26 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 77.0 | +1.8 | 실측 | [[gdpval]] 56.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 69.6 | +1.31 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | 63.2 | +0.88 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 65.6 | +1.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
