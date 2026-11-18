---
type: Model
title: Reka Flash 3
creator: Reka AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.11
output_speed_tps: 57.53567230918243
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 30.5, z: -0.81, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 18.2, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.36, r: 29.6, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.55, r: 26.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.1, estimated: false }  # 긴문맥
  instruction: { s: 25.7, z: -1.18, r: 32.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Reka Flash 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Reka Flash 3

Reka AI · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.1 · 출력 $0.2 · 혼합 $0.11/1M · 57.53567230918243 t/s · TTFT 0.9207613966577581s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.8 | -0.81 | 실측 | [[gpqa-diamond]] 52.929292929292906%×0.4, [[humanitys-last-exam]] 4.44%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 52.929292929292906%×1.0, [[humanitys-last-exam]] 4.44%×1.0 |
| 코딩 | 29.6 | -1.36 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 26.7 | -1.55 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.1 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 32.3 | -1.18 | 실측 | [[ifbench]] 30.408163265306097%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
