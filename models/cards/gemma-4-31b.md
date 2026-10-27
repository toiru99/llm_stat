---
type: Model
title: Gemma 4 31B
creator: Google
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.0
output_speed_tps: 35.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 45.1, z: 0.09, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.2, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 60.4, z: 0.76, r: 61.4, estimated: false }  # 코딩
  agentic: { s: 45.6, z: 0.37, r: 55.6, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.63, r: 40.6, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.36, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.52, r: 72.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Gemma 4 31B

Google · Open · Unknown · 컨텍스트 256k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · 35.0 t/s · TTFT 1.09s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.09 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 61.4 | +0.76 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 55.6 | +0.37 | 실측 | [[gdpval]] 619.0%×1.0, [[itbench]] 37.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 40.6 | -0.63 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 55.5 | +0.36 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 72.9 | +1.52 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
