---
type: Model
title: Qwen3.8 27B (low)
creator: Alibaba
license: Open
intelligence_index: 26.0
price_blended_usd_1m: 0.47
output_speed_tps: 49.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 39.3, z: -0.18, r: 47.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.58, r: 58.7, estimated: false }  # 코딩
  agentic: { s: 68.1, z: 1.15, r: 67.2, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 0.87, r: 63.0, estimated: false }  # 신뢰성
  multimodal: { s: 80.8, z: 0.43, r: 56.5, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 55.5, z: 0.04, r: 50.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Qwen3.8 27B (low)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · 49.0 t/s · TTFT 3.9s · 256k ctx` · 가성비 55.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.3 | -0.18 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 58.7 | +0.58 | 실측 | [[scicode]] 40.0%×1.0 |
| 에이전트 | 67.2 | +1.15 | 실측 | [[gdpval]] 1371.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 63.0 | +0.87 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 56.5 | +0.43 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 50.7 | +0.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
