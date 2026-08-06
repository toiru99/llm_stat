---
type: Model
title: ERNIE 5.0 Thinking Preview
creator: Baidu
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.7, z: 0.11, r: 51.6, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: 0.05, r: 50.8, estimated: false }  # 추론
  coding: { s: 54.8, z: 0.31, r: 54.7, estimated: false }  # 코딩
  agentic: { s: 61.4, z: 1.02, r: 65.4, estimated: false }  # 에이전트
  trust: { s: 16.1, z: -0.58, r: 41.3, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: -0.02, r: 49.7, estimated: false }  # 멀티모달
  long_context: { s: 9.2, z: -1.2, r: 31.9, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.51, r: 42.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — ERNIE 5.0 Thinking Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# ERNIE 5.0 Thinking Preview

Baidu · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.6 | +0.11 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 50.8 | +0.05 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 54.7 | +0.31 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 65.4 | +1.02 | 실측 | [[tau2-bench]] 84.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 41.3 | -0.58 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 49.7 | -0.02 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 31.9 | -1.2 | 실측 | [[aa-lcr]] 7.0%×1.0 |
| 지시 따르기 | 42.3 | -0.51 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
