---
type: Model
title: Qwen3.8 27B (medium)
creator: Alibaba
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.47
output_speed_tps: 53.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.1, z: -0.11, r: 48.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.58, r: 58.7, estimated: false }  # 코딩
  agentic: { s: 78.2, z: 1.5, r: 72.5, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.25, r: 53.8, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.47, r: 57.1, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 71.1, z: 0.7, r: 60.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Qwen3.8 27B (medium)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 53.0 t/s · TTFT 3.83s · 256k ctx` · 가성비 59.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.3 | -0.11 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 58.7 | +0.58 | 실측 | [[scicode]] 39.0%×1.0 |
| 에이전트 | 72.5 | +1.5 | 실측 | [[gdpval]] 43.0%×1.0, [[tau3-banking]] 47.0%×1.0 |
| 신뢰성 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 57.1 | +0.47 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 60.5 | +0.7 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
