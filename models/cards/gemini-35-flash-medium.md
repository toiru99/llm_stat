---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 1.305
output_speed_tps: 223.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.4, z: 1.85, r: 77.8, estimated: false }  # 전문 지식
  reasoning: { s: 66.2, z: 1.5, r: 72.5, estimated: false }  # 추론
  coding: { s: 59.1, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 78.0, z: 1.55, r: 73.3, estimated: false }  # 에이전트
  trust: { s: 37.1, z: 0.6, r: 58.9, estimated: false }  # 신뢰성
  multimodal: { s: 95.8, z: 1.27, r: 69.1, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 1.05, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 223.0 t/s · TTFT 13.01s · 1M ctx` · 가성비 29.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.8 | +1.85 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 72.5 | +1.5 | 실측 | [[critpt]] 11.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 73.3 | +1.55 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 58.9 | +0.6 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 69.1 | +1.27 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 65.7 | +1.05 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
