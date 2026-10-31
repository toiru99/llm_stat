---
type: Model
title: Gemini 3.8 Flash (high)
creator: Google
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: 0.5775
output_speed_tps: 120.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 90.0, z: 1.79, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 79.4, z: 1.52, r: 72.9, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 86.7, z: 1.81, r: 77.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.27, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.8 Flash (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Gemini 3.8 Flash (high)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $0.75 · 출력 $3.75 · 혼합 $0.5775/1M · 120.0 t/s · TTFT 24.69s · 1M ctx` · 가성비 53.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.79 | 실측 | [[gpqa-diamond]] 95.0%×0.4, [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 72.9 | +1.52 | 실측 | [[critpt]] 44.0%×1.0, [[gpqa-diamond]] 95.0%×1.0, [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 57.0%×1.0 |
| 에이전트 | 77.1 | +1.81 | 실측 | [[gdpval]] 1445.0%×1.0, [[itbench]] 53.0%×1.0, [[tau3-banking]] 45.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
