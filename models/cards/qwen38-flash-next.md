---
type: Model
title: Qwen3.8-Flash-Next
creator: Alibaba
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.0882
output_speed_tps: 69.0
context_window: 256000
status: current
size_class: Large
params_b: 180
is_reasoning: true
radar:
  knowledge: { s: 55.6, z: 0.71, r: 60.7, estimated: false }  # 전문 지식
  reasoning: { s: 64.5, z: 1.42, r: 71.2, estimated: false }  # 추론
  coding: { s: 75.5, z: 1.47, r: 72.0, estimated: false }  # 코딩
  agentic: { s: 89.4, z: 1.98, r: 79.7, estimated: false }  # 에이전트
  trust: { s: 54.6, z: 1.41, r: 71.1, estimated: false }  # 신뢰성
  multimodal: { s: 90.3, z: 1.0, r: 64.9, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.27, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8-Flash-Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# Qwen3.8-Flash-Next

Alibaba · Open · Large(180B) · 컨텍스트 256k · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $0.15 · 출력 $0.47 · 혼합 $0.0882/1M · 69.0 t/s · TTFT 2.69s · 256k ctx` · 가성비 476.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.7 | +0.71 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 71.2 | +1.42 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 72.0 | +1.47 | 실측 | [[scicode]] 51.0%×1.0 |
| 에이전트 | 79.7 | +1.98 | 실측 | [[gdpval]] 57.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | 71.1 | +1.41 | 실측 | [[aa-omniscience]] 55.0%×1.0 |
| 멀티모달 | 64.9 | +1.0 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
