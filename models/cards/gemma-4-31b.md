---
type: Model
title: Gemma 4 31B
creator: Google
license: Open
intelligence_index: 4.38438284215374
price_blended_usd_1m: 0
output_speed_tps: 35.6529870800994
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.3, z: 0.77, r: 61.6, estimated: false }  # 전문 지식
  reasoning: { s: 40.9, z: 0.26, r: 53.9, estimated: false }  # 추론
  coding: { s: 60.7, z: 0.7, r: 60.5, estimated: false }  # 코딩
  agentic: { s: 47.4, z: 0.09, r: 51.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.6, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 78.6, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: 89.1, z: 1.47, r: 72.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 31B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Gemma 4 31B

Google · Open · Small · 컨텍스트 256k · 종합지능 **4.38438284215374**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · 35.6529870800994 t/s · TTFT 0.967639113902925s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.6 | +0.77 | 실측 | [[gpqa-diamond]] 85.6565656565657%×0.4, [[humanitys-last-exam]] 23.6329935125116%×0.3 |
| 추론 | 53.9 | +0.26 | 실측 | [[critpt]] 1.42857142857143%×1.0, [[gpqa-diamond]] 85.6565656565657%×1.0, [[humanitys-last-exam]] 23.6329935125116%×1.0 |
| 코딩 | 60.5 | +0.7 | 실측 | [[scicode]] 45.4861111111111%×1.0, [[terminal-bench]] 36.363636363636395%×0.5 |
| 에이전트 | 51.3 | +0.09 | 실측 | [[gdpval]] 626.6%×1.0, [[tau2-bench]] 59.9415204678363%×1.0, [[tau3-banking]] 14.8453608247423%×1.0, [[terminal-bench]] 36.363636363636395%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 73.4104046242775%×1.0 |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 69.6666666666667%×1.0 |
| 지시 따르기 | 72.1 | +1.47 | 실측 | [[ifbench]] 75.57823129251699%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
