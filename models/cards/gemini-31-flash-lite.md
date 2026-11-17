---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 6.15684082814488
price_blended_usd_1m: 0.2175
output_speed_tps: 319.8223337665334
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.3, z: 0.49, r: 57.4, estimated: false }  # 전문 지식
  reasoning: { s: 36.3, z: 0.05, r: 50.7, estimated: false }  # 추론
  coding: { s: 52.3, z: 0.43, r: 56.4, estimated: false }  # 코딩
  agentic: { s: 31.0, z: -0.47, r: 42.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 81.7, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 91.4, z: 1.58, r: 73.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.15684082814488** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.2175/1M · 319.8223337665334 t/s · TTFT 8.237053899380465s · 1M ctx` · 가성비 28.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.4 | +0.49 | 실측 | [[gpqa-diamond]] 82.2222222222222%×0.4, [[humanitys-last-exam]] 17.191844300278%×0.3 |
| 추론 | 50.7 | +0.05 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 82.2222222222222%×1.0, [[humanitys-last-exam]] 17.191844300278%×1.0 |
| 코딩 | 56.4 | +0.43 | 실측 | [[scicode]] 43.4027777777778%×1.0, [[terminal-bench]] 24.2424242424242%×0.5 |
| 에이전트 | 42.9 | -0.47 | 실측 | [[gdpval]] 437.67%×1.0, [[tau2-bench]] 31.2865497076023%×1.0, [[tau3-banking]] 9.69072164948454%×1.0, [[terminal-bench]] 24.2424242424242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 75.5491329479769%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 74.3333333333333%×1.0 |
| 지시 따르기 | 73.7 | +1.58 | 실측 | [[ifbench]] 77.2108843537415%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
