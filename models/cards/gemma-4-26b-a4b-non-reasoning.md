---
type: Model
title: Gemma 4 26B A4B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.115
output_speed_tps: 72.39018521374273
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.8, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 37.9, z: -0.06, r: 49.1, estimated: false }  # 코딩
  agentic: { s: 39.3, z: -0.18, r: 47.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.8, z: -0.07, r: 48.9, estimated: false }  # 멀티모달
  long_context: { s: 47.7, z: -0.16, r: 47.5, estimated: false }  # 긴문맥
  instruction: { s: 46.8, z: -0.29, r: 45.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemma 4 26B A4B (non-reasoning)

Google · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $0.13 · 출력 $0.4 · 혼합 $0.115/1M · 72.39018521374273 t/s · TTFT 1.6149421241760578s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[gpqa-diamond]] 71.4141414141414%×0.4, [[humanitys-last-exam]] 11.4921223354958%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 71.4141414141414%×1.0, [[humanitys-last-exam]] 11.4921223354958%×1.0 |
| 코딩 | 49.1 | -0.06 | 실측 | [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 47.3 | -0.18 | 실측 | [[tau2-bench]] 40.3508771929825%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.9 | -0.07 | 실측 | [[mmmu-pro]] 66.7052023121387%×1.0 |
| 긴문맥 | 47.5 | -0.16 | 실측 | [[aa-lcr]] 42.3333333333333%×1.0 |
| 지시 따르기 | 45.7 | -0.29 | 실측 | [[ifbench]] 45.442176870748305%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
