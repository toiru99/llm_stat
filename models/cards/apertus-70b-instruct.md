---
type: Model
title: Apertus 70B Instruct
creator: Swiss AI Initiative
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 1.03
output_speed_tps: None
context_window: 65500
status: current
size_class: Medium
params_b: 70
is_reasoning: false
radar:
  knowledge: { s: 16.4, z: -1.18, r: 32.3, estimated: false }  # 전문 지식
  reasoning: { s: 8.9, z: -1.26, r: 31.1, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.12, r: 33.2, estimated: false }  # 코딩
  agentic: { s: 6.6, z: -1.18, r: 32.2, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.43, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.38, r: 29.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apertus 70B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Apertus 70B Instruct

Swiss AI Initiative · Open · Medium(70B) · 컨텍스트 65k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.82 · 출력 $2.92 · 혼합 $1.03/1M · None t/s · TTFT Nones · 65k ctx` · 가성비 1.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.3 | -1.18 | 실측 | [[aa-omniscience]] 12.0%×1.0, [[gpqa-diamond]] 27.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 31.1 | -1.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 27.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.2 | -1.12 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.2 | -1.18 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 29.4 | -1.38 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
