---
type: Model
title: Qwen3.8 27B (low)
creator: Alibaba
license: Open
intelligence_index: 43.0
price_blended_usd_1m: 0.435
output_speed_tps: 59.0
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: true
radar:
  knowledge: { s: 39.7, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 37.4, z: 0.08, r: 51.1, estimated: false }  # 추론
  coding: { s: 66.7, z: 0.73, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 1.2, r: 68.0, estimated: false }  # 에이전트
  trust: { s: 52.3, z: 0.99, r: 64.8, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.56, r: 58.4, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 75.8, z: 0.87, r: 63.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Qwen3.8 27B (low)

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 59.0 t/s · TTFT 3.35s · 256k ctx` · 가성비 98.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 51.1 | +0.08 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 60.9 | +0.73 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 68.0 | +1.2 | 실측 | [[gdpval]] 50.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 64.8 | +0.99 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 58.4 | +0.56 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 63.0 | +0.87 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
