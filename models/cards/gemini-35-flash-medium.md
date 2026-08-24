---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 47.0
price_blended_usd_1m: 1.305
output_speed_tps: 217.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.7, z: 1.91, r: 78.7, estimated: false }  # 전문 지식
  reasoning: { s: 68.3, z: 1.59, r: 73.8, estimated: false }  # 추론
  coding: { s: 78.6, z: 1.22, r: 68.4, estimated: false }  # 코딩
  agentic: { s: 78.0, z: 1.58, r: 73.7, estimated: false }  # 에이전트
  trust: { s: 41.9, z: 0.59, r: 58.9, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.26, r: 68.9, estimated: false }  # 멀티모달
  long_context: { s: 96.4, z: 1.37, r: 70.6, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.4, r: 71.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **47.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 217.0 t/s · TTFT 15.75s · 1M ctx` · 가성비 36.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.7 | +1.91 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 73.8 | +1.59 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 68.4 | +1.22 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 73.7 | +1.58 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 58.9 | +0.59 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 68.9 | +1.26 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 70.6 | +1.37 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 71.0 | +1.4 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
