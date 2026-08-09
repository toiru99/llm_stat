---
type: Model
title: Jamba 1.7 Mini
creator: AI21 Labs
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 258000
status: current
size_class: Medium
params_b: 52
is_reasoning: false
radar:
  knowledge: { s: 16.3, z: -1.17, r: 32.5, estimated: false }  # 전문 지식
  reasoning: { s: 10.6, z: -1.2, r: 32.0, estimated: false }  # 추론
  coding: { s: 10.0, z: -1.55, r: 26.8, estimated: false }  # 코딩
  agentic: { s: 6.6, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.05, r: 34.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.1, z: -0.95, r: 35.8, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.11, r: 33.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Jamba 1.7 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# Jamba 1.7 Mini

AI21 Labs · Open · Medium(52B) · 컨텍스트 258k · 종합지능 **2.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 258k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.5 | -1.17 | 실측 | [[aa-omniscience]] 11.0%×1.0, [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 32.0 | -1.2 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 26.8 | -1.55 | 실측 | [[scicode]] 9.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 34.3 | -1.05 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.8 | -0.95 | 실측 | [[aa-lcr]] 15.0%×1.0 |
| 지시 따르기 | 33.4 | -1.11 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
