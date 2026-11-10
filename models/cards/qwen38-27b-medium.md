---
type: Model
title: Qwen3.8 27B (medium)
creator: Alibaba
license: Open
intelligence_index: 17.0
price_blended_usd_1m: 0.47
output_speed_tps: None
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.0, z: 0.48, r: 57.3, estimated: false }  # 전문 지식
  reasoning: { s: 41.9, z: -0.06, r: 49.0, estimated: false }  # 추론
  coding: { s: 52.8, z: 0.51, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 83.4, z: 1.65, r: 74.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 57.9, z: 0.22, r: 53.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.8 27B (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Qwen3.8 27B (medium)

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.47/1M · None t/s · TTFT Nones · 256k ctx` · 가성비 36.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.3 | +0.48 | 실측 | [[gpqa-diamond]] 84.5%×0.4, [[humanitys-last-exam]] 14.1%×0.3 |
| 추론 | 49.0 | -0.06 | 실측 | [[critpt]] 16.5%×1.0, [[gpqa-diamond]] 84.5%×1.0, [[humanitys-last-exam]] 14.1%×1.0 |
| 코딩 | 57.6 | +0.51 | 실측 | [[scicode]] 39.0%×1.0 |
| 에이전트 | 74.7 | +1.65 | 실측 | [[gdpval]] 1389.0%×1.0, [[tau3-banking]] 47.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 79.7%×1.0 |
| 지시 따르기 | 53.3 | +0.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
