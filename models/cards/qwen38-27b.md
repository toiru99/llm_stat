---
type: Model
title: Qwen3.8 27B
creator: Alibaba
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.47
output_speed_tps: 52.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.8, z: -0.51, r: 42.3, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.07, r: 48.9, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.46, r: 56.9, estimated: false }  # 코딩
  agentic: { s: 40.5, z: 0.11, r: 51.6, estimated: false }  # 에이전트
  trust: { s: 82.5, z: 2.66, r: 89.9, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.25, r: 53.7, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 58.6, z: 0.21, r: 53.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Qwen3.8 27B

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **20.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 52.0 t/s · TTFT 3.83s · 256k ctx` · 가성비 42.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.3 | -0.51 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 48.9 | -0.07 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 56.9 | +0.46 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 51.6 | +0.11 | 실측 | [[gdpval]] 28.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 89.9 | +2.66 | 실측 | [[aa-omniscience]] 82.0%×1.0 |
| 멀티모달 | 53.7 | +0.25 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 53.2 | +0.21 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
