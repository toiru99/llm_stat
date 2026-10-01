---
type: Model
title: Gemma 4 31B
creator: Google
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.0
output_speed_tps: 36.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 45.1, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 43.3, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 60.4, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 43.8, z: 0.19, r: 52.9, estimated: false }  # 에이전트
  trust: { s: 13.4, z: -0.62, r: 40.8, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.4, r: 56.1, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.49, r: 72.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Gemma 4 31B

Google · Open · Unknown · 컨텍스트 256k · 종합지능 **15.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0.0/1M · 36.0 t/s · TTFT 1.06s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 52.9 | +0.19 | 실측 | [[gdpval]] 6.0%×1.0, [[itbench]] 37.0%×1.0, [[tau2-bench]] 60.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 40.8 | -0.62 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | 56.1 | +0.4 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 72.3 | +1.49 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
