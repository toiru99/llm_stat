---
type: Model
title: Gemini 2.5 Pro
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 116.590846029405
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.9, z: 0.7, r: 60.5, estimated: false }  # 전문 지식
  reasoning: { s: 40.9, z: 0.26, r: 54.0, estimated: false }  # 추론
  coding: { s: 56.6, z: 0.56, r: 58.4, estimated: false }  # 코딩
  agentic: { s: 37.9, z: -0.24, r: 46.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.6, z: 0.47, r: 57.0, estimated: false }  # 멀티모달
  long_context: { s: 77.8, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 51.4, z: -0.1, r: 48.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Gemini 2.5 Pro

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 116.590846029405 t/s · TTFT 10.9520885547666s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.5 | +0.7 | 실측 | [[gpqa-diamond]] 84.4444444444444%×0.4, [[humanitys-last-exam]] 22.5208526413346%×0.3 |
| 추론 | 54.0 | +0.26 | 실측 | [[critpt]] 2.57142857142857%×1.0, [[gpqa-diamond]] 84.4444444444444%×1.0, [[humanitys-last-exam]] 22.5208526413346%×1.0 |
| 코딩 | 58.4 | +0.56 | 실측 | [[scicode]] 46.296296296296305%×1.0, [[terminal-bench]] 26.5151515151515%×0.5 |
| 에이전트 | 46.3 | -0.24 | 실측 | [[gdpval]] 462.73%×1.0, [[tau2-bench]] 54.093567251462005%×1.0, [[tau3-banking]] 9.69072164948454%×1.0, [[terminal-bench]] 26.5151515151515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 57.0 | +0.47 | 실측 | [[mmmu-pro]] 74.9132947976879%×1.0 |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 48.4 | -0.1 | 실측 | [[ifbench]] 48.707482993197296%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
