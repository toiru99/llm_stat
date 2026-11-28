---
type: Model
title: Qwen3.8 27B (medium)
creator: Alibaba
license: Open
intelligence_index: 17.5023479440148
price_blended_usd_1m: 0.47
output_speed_tps: 59.3736887063596
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 57.0, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.02, r: 49.7, estimated: false }  # 추론
  coding: { s: 52.8, z: 0.39, r: 55.9, estimated: false }  # 코딩
  agentic: { s: 85.7, z: 1.36, r: 70.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.6, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Qwen3.8 27B (medium)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **17.5023479440148**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 코딩, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 59.3736887063596 t/s · TTFT 15.4044649925633s · 256k ctx` · 가성비 37.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[gpqa-diamond]] 84.5455%×0.4, [[humanitys-last-exam]] 14.0871%×0.3 |
| 추론 | 49.7 | -0.02 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 84.5455%×1.0, [[humanitys-last-exam]] 14.0871%×1.0 |
| 코딩 | 55.9 | +0.39 | 실측 | [[scicode]] 39.0046%×1.0 |
| 에이전트 | 70.3 | +1.36 | 실측 | [[gdpval]] 1390.56 Elo×1.0, [[tau3-banking]] 47.4227%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.1618%×1.0 |
| 긴문맥 | 64.8 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
