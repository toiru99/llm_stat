---
type: Model
title: Mistral Small 4
creator: Mistral
license: Open
intelligence_index: 13.0
price_blended_usd_1m: 0.195
output_speed_tps: 174.0
context_window: 256000
status: current
size_class: Medium
params_b: 119
is_reasoning: true
radar:
  knowledge: { s: 40.4, z: -0.03, r: 49.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.1, z: -0.19, r: 47.2, estimated: false }  # 추론
  coding: { s: 25.8, z: -0.22, r: 46.6, estimated: false }  # 코딩
  agentic: { s: 20.0, z: -0.67, r: 40.0, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.35, r: 55.3, estimated: false }  # 신뢰성
  multimodal: { s: 58.3, z: -0.59, r: 41.2, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.08, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Mistral Small 4

Mistral · Open · Medium(119B) · 컨텍스트 256k · 종합지능 **13.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.195/1M · 174.0 t/s · TTFT 0.76s · 256k ctx` · 가성비 66.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.6 | -0.03 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 47.2 | -0.19 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 46.6 | -0.22 | 실측 | [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 40.0 | -0.67 | 실측 | [[gdpval]] 2.0%×1.0, [[tau2-bench]] 41.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 41.2 | -0.59 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 48.7 | -0.08 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
