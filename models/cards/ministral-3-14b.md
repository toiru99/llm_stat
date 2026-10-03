---
type: Model
title: Ministral 3 14B
creator: Mistral
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.074
output_speed_tps: 65.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.3, z: -0.75, r: 38.8, estimated: false }  # 전문 지식
  reasoning: { s: 20.4, z: -0.73, r: 39.1, estimated: false }  # 추론
  coding: { s: 21.4, z: -0.51, r: 42.3, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -1.02, r: 34.7, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: 47.9, z: -1.17, r: 32.4, estimated: false }  # 멀티모달
  long_context: { s: 29.2, z: -0.68, r: 39.8, estimated: false }  # 긴문맥
  instruction: { s: 28.2, z: -1.09, r: 33.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Ministral 3 14B

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $0.2 · 혼합 $0.074/1M · 65.0 t/s · TTFT 1.06s · 256k ctx` · 가성비 81.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 57.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.1 | -0.73 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 57.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.3 | -0.51 | 실측 | [[scicode]] 24.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 34.7 | -1.02 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 27.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 32.4 | -1.17 | 실측 | [[mmmu-pro]] 50.0%×1.0 |
| 긴문맥 | 39.8 | -0.68 | 실측 | [[aa-lcr]] 26.0%×1.0 |
| 지시 따르기 | 33.7 | -1.09 | 실측 | [[ifbench]] 32.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
