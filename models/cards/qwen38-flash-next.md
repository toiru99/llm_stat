---
type: Model
title: Qwen3.8-Flash-Next
creator: Alibaba
license: Open
intelligence_index: 28.5750026655353
price_blended_usd_1m: 0.0882
output_speed_tps: 60.943739839596
context_window: 256000
status: current
size_class: Large
params_b: 180
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.43, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 59.1, z: 1.19, r: 67.8, estimated: false }  # 추론
  coding: { s: 71.8, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 89.1, z: 1.48, r: 72.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.5, z: 0.72, r: 60.8, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8-Flash-Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.8-Flash-Next

Alibaba · Open · Large(180B) · 컨텍스트 256k · 종합지능 **28.5750026655353**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.47 · 혼합 $0.0882/1M · 60.943739839596 t/s · TTFT 2.625725926341s · 256k ctx` · 가성비 324.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.43 | 실측 | [[gpqa-diamond]] 92.3232%×0.4, [[humanitys-last-exam]] 38.0445%×0.3 |
| 추론 | 67.8 | +1.19 | 실측 | [[critpt]] 11.1429%×1.0, [[gpqa-diamond]] 92.3232%×1.0, [[humanitys-last-exam]] 38.0445%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 50.5787%×1.0 |
| 에이전트 | 72.2 | +1.48 | 실측 | [[gdpval]] 1636.77 Elo×1.0, [[tau3-banking]] 45.3608%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.8 | +0.72 | 실측 | [[mmmu-pro]] 78.6127%×1.0 |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
