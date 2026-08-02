---
type: Model
title: Magistral Small 1.2
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: None
output_speed_tps: 93.0
context_window: 128000
status: current
size_class: Small
params_b: 24
is_reasoning: true
radar:
  knowledge: { s: 29.1, z: -0.57, r: 41.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.4, z: -0.46, r: 43.2, estimated: false }  # 추론
  coding: { s: 41.4, z: -0.23, r: 46.5, estimated: false }  # 코딩
  agentic: { s: 11.9, z: -0.95, r: 35.7, estimated: false }  # 에이전트
  trust: { s: 9.2, z: -0.89, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: 57.1, z: -0.7, r: 39.5, estimated: false }  # 멀티모달
  long_context: { s: 21.1, z: -0.84, r: 37.4, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.33, r: 45.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Magistral Small 1.2

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $None/1M · 93.0 t/s · TTFT 0.91s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 43.2 | -0.46 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 46.5 | -0.23 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.7 | -0.95 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 28.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 39.5 | -0.7 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 37.4 | -0.84 | 실측 | [[aa-lcr]] 16.0%×1.0 |
| 지시 따르기 | 45.0 | -0.33 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
