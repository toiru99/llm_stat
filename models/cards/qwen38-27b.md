---
type: Model
title: Qwen3.8 27B
creator: Alibaba
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.435
output_speed_tps: 50.0
context_window: 256000
status: current
size_class: Small
params_b: 27
is_reasoning: false
radar:
  knowledge: { s: 30.9, z: -0.48, r: 42.8, estimated: false }  # 전문 지식
  reasoning: { s: 34.2, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 44.9, z: 0.45, r: 56.8, estimated: false }  # 코딩
  agentic: { s: 44.6, z: 0.27, r: 54.1, estimated: false }  # 에이전트
  trust: { s: 82.5, z: 2.74, r: 91.2, estimated: false }  # 신뢰성
  multimodal: { s: 76.4, z: 0.31, r: 54.6, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.87, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 55.8, z: 0.13, r: 52.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3.8 27B

Alibaba · Open · Small(27B) · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 50.0 t/s · TTFT 3.86s · 256k ctx` · 가성비 59.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.8 | -0.48 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 56.8 | +0.45 | 실측 | [[scicode]] 36.0%×1.0 |
| 에이전트 | 54.1 | +0.27 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 20.0%×1.0 |
| 신뢰성 | 91.2 | +2.74 | 실측 | [[aa-omniscience]] 82.0%×1.0 |
| 멀티모달 | 54.6 | +0.31 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 63.1 | +0.87 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 52.0 | +0.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
