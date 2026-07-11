---
type: Model
title: Gemma 4 12B
creator: Google
license: Open
intelligence_index: 22.0
price_blended_usd_1m: 0.12
output_speed_tps: 52.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.7, z: -0.13, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 51.3, z: 0.23, r: 53.4, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.17, r: 47.5, estimated: false }  # 에이전트
  trust: { s: 21.2, z: -0.32, r: 45.2, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.39, r: 55.9, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.71, r: 60.7, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.44, r: 71.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 12B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-11
timestamp: 2026-07-11T00:00:00Z
---

# Gemma 4 12B

Google · Open · Unknown · 컨텍스트 256k · 종합지능 **22.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 52.0 t/s · TTFT 2.53s · 256k ctx` · 가성비 183.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.13 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 15.0%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 15.0%×1.0 |
| 코딩 | 53.4 | +0.23 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 47.5 | -0.17 | 실측 | [[tau2-bench]] 36.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 45.2 | -0.32 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 55.9 | +0.39 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 60.7 | +0.71 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 71.6 | +1.44 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
