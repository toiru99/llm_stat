---
type: Model
title: Qwen3.8 27B (low)
creator: Alibaba
license: Open
intelligence_index: 43.0
price_blended_usd_1m: 0.435
output_speed_tps: 64.0
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 39.7, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 37.4, z: 0.09, r: 51.3, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.74, r: 61.1, estimated: false }  # 코딩
  agentic: { s: 67.9, z: 1.19, r: 67.8, estimated: false }  # 에이전트
  trust: { s: 52.3, z: 1.04, r: 65.6, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 76.9, z: 0.92, r: 63.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Qwen3.8 27B (low)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 64.0 t/s · TTFT 2.98s · 256k ctx` · 가성비 98.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 51.3 | +0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 61.1 | +0.74 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 67.8 | +1.19 | 실측 | [[gdpval]] 49.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 65.6 | +1.04 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
