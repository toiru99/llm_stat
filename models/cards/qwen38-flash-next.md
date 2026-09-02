---
type: Model
title: Qwen3.8-Flash-Next
creator: Alibaba
license: Open
intelligence_index: 56.0
price_blended_usd_1m: 0.0882
output_speed_tps: 88.0
context_window: 256000
status: current
size_class: Large
params_b: 180
is_reasoning: true
radar:
  knowledge: { s: 55.9, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 64.9, z: 1.53, r: 72.9, estimated: false }  # 추론
  coding: { s: 75.8, z: 1.23, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 89.7, z: 2.05, r: 80.7, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.44, r: 71.7, estimated: false }  # 신뢰성
  multimodal: { s: 92.9, z: 1.07, r: 66.0, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.31, r: 69.7, estimated: false }  # 긴문맥
  instruction: { s: 81.5, z: 1.21, r: 68.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8-Flash-Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Qwen3.8-Flash-Next

Alibaba · Open · Large(180B) · 컨텍스트 256k · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.47 · 혼합 $0.0882/1M · 88.0 t/s · TTFT 2.66s · 256k ctx` · 가성비 634.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 72.9 | +1.53 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 68.5 | +1.23 | 실측 | [[scicode]] 47.0%×1.0 |
| 에이전트 | 80.7 | +2.05 | 실측 | [[gdpval]] 62.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 71.7 | +1.44 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | 66.0 | +1.07 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 69.7 | +1.31 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
