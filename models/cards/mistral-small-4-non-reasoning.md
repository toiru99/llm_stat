---
type: Model
title: Mistral Small 4 (non-reasoning)
creator: Mistral
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.1005
output_speed_tps: 151.0
context_window: 256000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.65, r: 40.3, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 17.4, z: -0.83, r: 37.6, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.28, r: 45.7, estimated: false }  # 신뢰성
  multimodal: { s: 42.5, z: -1.45, r: 28.3, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.62, r: 40.7, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.04, r: 34.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Mistral Small 4 (non-reasoning)

Mistral · Open · Medium · 컨텍스트 256k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 151.0 t/s · TTFT 0.72s · 256k ctx` · 가성비 89.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 37.6 | -0.83 | 실측 | [[tau2-bench]] 18.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 45.7 | -0.28 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 28.3 | -1.45 | 실측 | [[mmmu-pro]] 46.0%×1.0 |
| 긴문맥 | 40.7 | -0.62 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 34.4 | -1.04 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
