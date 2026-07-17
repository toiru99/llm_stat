---
type: Model
title: Apertus 8B Instruct
creator: Swiss AI Initiative
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.11
output_speed_tps: None
context_window: 65500
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.7, z: -1.25, r: 31.2, estimated: false }  # 전문 지식
  reasoning: { s: 8.9, z: -1.3, r: 30.5, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.76, r: 23.6, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.19, r: 32.1, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -1.09, r: 33.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.44, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 14.1, z: -1.57, r: 26.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Apertus 8B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# Apertus 8B Instruct

Swiss AI Initiative · Open · Unknown · 컨텍스트 65k · 종합지능 **1.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.2 · 혼합 $0.11/1M · None t/s · TTFT Nones · 65k ctx` · 가성비 9.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.2 | -1.25 | 실측 | [[aa-omniscience]] 10.0%×1.0, [[gpqa-diamond]] 26.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.5 | -1.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 26.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.6 | -1.76 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.1 | -1.19 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 33.6 | -1.09 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.44 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 26.4 | -1.57 | 실측 | [[ifbench]] 22.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
