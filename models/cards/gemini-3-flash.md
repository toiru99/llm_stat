---
type: Model
title: Gemini 3 Flash
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 200.40463048729126
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.6, z: 1.28, r: 69.3, estimated: false }  # 전문 지식
  reasoning: { s: 55.0, z: 0.97, r: 64.6, estimated: false }  # 추론
  coding: { s: 58.6, z: 0.64, r: 59.6, estimated: false }  # 코딩
  agentic: { s: 60.0, z: 0.53, r: 58.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.5, z: 0.83, r: 62.5, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 92.5, z: 1.62, r: 74.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 3 Flash

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 200.40463048729126 t/s · TTFT 4.715615923330595s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.3 | +1.28 | 실측 | [[gpqa-diamond]] 89.79797979797979%×0.4, [[humanitys-last-exam]] 36.5616311399444%×0.3 |
| 추론 | 64.6 | +0.97 | 실측 | [[critpt]] 8.57142857142857%×1.0, [[gpqa-diamond]] 89.79797979797979%×1.0, [[humanitys-last-exam]] 36.5616311399444%×1.0 |
| 코딩 | 59.6 | +0.64 | 실측 | [[terminal-bench]] 38.636363636363605%×0.5 |
| 에이전트 | 58.0 | +0.53 | 실측 | [[tau2-bench]] 80.4093567251462%×1.0, [[tau3-banking]] 20.8247422680412%×1.0, [[terminal-bench]] 38.636363636363605%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.5 | +0.83 | 실측 | [[mmmu-pro]] 79.9421965317919%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 74.3 | +1.62 | 실측 | [[ifbench]] 77.9591836734694%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
