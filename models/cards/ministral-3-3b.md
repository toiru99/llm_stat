---
type: Model
title: Ministral 3 3B
creator: Mistral
license: Open
intelligence_index: 6.0
price_blended_usd_1m: None
output_speed_tps: 232.0
context_window: 256000
status: current
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 13.8, z: -1.29, r: 30.6, estimated: false }  # 전문 지식
  reasoning: { s: 10.5, z: -1.22, r: 31.7, estimated: false }  # 추론
  coding: { s: 15.6, z: -1.3, r: 30.5, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: 24.1, z: -0.17, r: 47.5, estimated: false }  # 신뢰성
  multimodal: { s: 33.3, z: -1.84, r: 22.4, estimated: false }  # 멀티모달
  long_context: { s: 15.8, z: -0.99, r: 35.2, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.49, r: 27.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Ministral 3 3B

Mistral · Open · Tiny(3B) · 컨텍스트 256k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.1 · 혼합 $None/1M · 232.0 t/s · TTFT 0.6s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.6 | -1.29 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.7 | -1.22 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 30.5 | -1.3 | 실측 | [[scicode]] 14.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 47.5 | -0.17 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | 22.4 | -1.84 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 35.2 | -0.99 | 실측 | [[aa-lcr]] 12.0%×1.0 |
| 지시 따르기 | 27.7 | -1.49 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
