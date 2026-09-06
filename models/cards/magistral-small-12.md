---
type: Model
title: Magistral Small 1.2
creator: Mistral
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.6
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 24
is_reasoning: true
radar:
  knowledge: { s: 28.3, z: -0.61, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.6, z: -0.5, r: 42.4, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.86, r: 37.1, estimated: false }  # 코딩
  agentic: { s: 11.4, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 55.6, z: -0.72, r: 39.2, estimated: false }  # 멀티모달
  long_context: { s: 21.3, z: -0.85, r: 37.2, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Magistral Small 1.2

Mistral · Open · Small(24B) · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 10.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.61 | 실측 | [[aa-omniscience]] 13.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 42.4 | -0.5 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 37.1 | -0.86 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 28.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 39.2 | -0.72 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 37.2 | -0.85 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
