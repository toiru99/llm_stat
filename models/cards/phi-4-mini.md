---
type: Model
title: Phi-4 Mini
creator: Microsoft
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0975
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.8, z: -1.39, r: 29.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.3, z: -1.31, r: 30.4, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.25, r: 31.3, estimated: false }  # 코딩
  agentic: { s: 10.7, z: -0.81, r: 37.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 17.2, z: -1.06, r: 34.1, estimated: false }  # 긴문맥
  instruction: { s: 12.6, z: -1.71, r: 24.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-4 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Phi-4 Mini

Microsoft · Open · Tiny · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.0975/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.1 | -1.39 | 실측 | [[gpqa-diamond]] 33.1%×0.4, [[humanitys-last-exam]] 4.5%×0.3 |
| 추론 | 30.4 | -1.31 | 실측 | [[gpqa-diamond]] 33.1%×1.0, [[humanitys-last-exam]] 4.5%×1.0 |
| 코딩 | 31.3 | -1.25 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 37.9 | -0.81 | 실측 | [[gdpval]] 401.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.1 | -1.06 | 실측 | [[aa-lcr]] 15.3%×1.0 |
| 지시 따르기 | 24.3 | -1.71 | 실측 | [[ifbench]] 21.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
