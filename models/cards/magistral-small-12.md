---
type: Model
title: Magistral Small 1.2
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.6
output_speed_tps: 144.0
context_window: 128000
status: current
size_class: Small
params_b: 24
is_reasoning: true
radar:
  knowledge: { s: 28.3, z: -0.59, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.3, z: -0.47, r: 42.9, estimated: false }  # 추론
  coding: { s: 41.4, z: -0.25, r: 46.3, estimated: false }  # 코딩
  agentic: { s: 11.4, z: -0.97, r: 35.5, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.83, r: 37.5, estimated: false }  # 신뢰성
  multimodal: { s: 57.1, z: -0.71, r: 39.4, estimated: false }  # 멀티모달
  long_context: { s: 21.7, z: -0.83, r: 37.5, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.35, r: 44.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Magistral Small 1.2

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · 144.0 t/s · TTFT 0.83s · 128k ctx` · 가성비 18.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.59 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.9 | -0.47 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 46.3 | -0.25 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.5 | -0.97 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 28.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 37.5 | -0.83 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 39.4 | -0.71 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 37.5 | -0.83 | 실측 | [[aa-lcr]] 18.0%×1.0 |
| 지시 따르기 | 44.7 | -0.35 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
