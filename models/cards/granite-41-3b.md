---
type: Model
title: Granite 4.1 3B
creator: IBM
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.4, z: -1.26, r: 31.0, estimated: false }  # 전문 지식
  reasoning: { s: 9.6, z: -1.26, r: 31.0, estimated: false }  # 추론
  coding: { s: 14.3, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 6.6, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: 4.7, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 3.9, z: -1.33, r: 30.1, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.89, r: 36.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# Granite 4.1 3B

IBM · Open · Unknown · 컨텍스트 131k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.0 | -1.26 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 31.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 31.0 | -1.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 31.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[scicode]] 12.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 20.0%×1.0, [[tau3-banking]] 1.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.1 | -1.33 | 실측 | [[aa-lcr]] 3.0%×1.0 |
| 지시 따르기 | 36.6 | -0.89 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
