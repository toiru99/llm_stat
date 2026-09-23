---
type: Model
title: Phi-4 Mini
creator: Microsoft
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0
output_speed_tps: 45.0
context_window: 128000
status: current
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.0, z: -1.22, r: 31.7, estimated: false }  # 전문 지식
  reasoning: { s: 10.6, z: -1.18, r: 32.3, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.21, r: 31.8, estimated: false }  # 코딩
  agentic: { s: 2.7, z: -1.35, r: 29.8, estimated: false }  # 에이전트
  trust: { s: 20.6, z: -0.24, r: 46.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.9, z: -1.03, r: 34.6, estimated: false }  # 긴문맥
  instruction: { s: 12.7, z: -1.7, r: 24.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Phi-4 Mini

Microsoft · Open · Tiny · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 45.0 t/s · TTFT 0.86s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.7 | -1.22 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 32.3 | -1.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 31.8 | -1.21 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 29.8 | -1.35 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 8.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 46.5 | -0.24 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.6 | -1.03 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 24.5 | -1.7 | 실측 | [[ifbench]] 21.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
