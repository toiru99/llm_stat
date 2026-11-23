---
type: Model
title: Kimi Linear 48B A3B Instruct
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 21.6, z: -1.24, r: 31.4, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.81, r: 37.8, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.77, r: 38.4, estimated: false }  # 코딩
  agentic: { s: 8.6, z: -1.25, r: 31.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.66, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 22.4, z: -1.32, r: 30.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi Linear 48B A3B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Kimi Linear 48B A3B Instruct

Kimi · Open · Medium · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.4 | -1.24 | 실측 | [[gpqa-diamond]] 41.2121212121212%×0.4, [[humanitys-last-exam]] 2.45597775718258%×0.3 |
| 추론 | 37.8 | -0.81 | 실측 | [[gpqa-diamond]] 41.2121212121212%×1.0, [[humanitys-last-exam]] 2.45597775718258%×1.0 |
| 코딩 | 38.4 | -0.77 | 실측 | [[terminal-bench]] 11.363636363636399%×0.5 |
| 에이전트 | 31.2 | -1.25 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 11.363636363636399%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.2 | -0.66 | 실측 | [[aa-lcr]] 28.000000000000004%×1.0 |
| 지시 따르기 | 30.3 | -1.32 | 실측 | [[ifbench]] 28.095238095238102%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
