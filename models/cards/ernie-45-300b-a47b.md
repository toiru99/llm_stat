---
type: Model
title: ERNIE 4.5 300B A47B
creator: Baidu
license: Open
intelligence_index: 9.0
price_blended_usd_1m: 0.362
output_speed_tps: None
context_window: 131000
status: current
size_class: Large
params_b: 300
is_reasoning: false
radar:
  knowledge: { s: 38.6, z: -0.13, r: 48.0, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.23, r: 46.5, estimated: false }  # 추론
  coding: { s: 37.5, z: -0.41, r: 43.9, estimated: false }  # 코딩
  agentic: { s: 4.5, z: -1.25, r: 31.3, estimated: false }  # 에이전트
  trust: { s: 36.8, z: 0.37, r: 55.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.6, z: -1.4, r: 29.0, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.63, r: 40.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — ERNIE 4.5 300B A47B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# ERNIE 4.5 300B A47B

Baidu · Open · Large(300B) · 컨텍스트 131k · 종합지능 **9.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.28 · 출력 $1.1 · 혼합 $0.362/1M · None t/s · TTFT Nones · 131k ctx` · 가성비 24.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.0 | -0.13 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 46.5 | -0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.9 | -0.41 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 31.3 | -1.25 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 55.5 | +0.37 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.0 | -1.4 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 40.6 | -0.63 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
