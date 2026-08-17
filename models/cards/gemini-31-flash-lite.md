---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 0.2175
output_speed_tps: 335.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.3, z: 0.77, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 39.2, z: 0.19, r: 52.8, estimated: false }  # 추론
  coding: { s: 58.8, z: 0.43, r: 56.5, estimated: false }  # 코딩
  agentic: { s: 24.3, z: -0.48, r: 42.8, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.43, r: 43.6, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.71, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.52, r: 72.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.2175/1M · 335.0 t/s · TTFT 5.33s · 1M ctx` · 가성비 119.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.77 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 52.8 | +0.19 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 56.5 | +0.43 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 42.8 | -0.48 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 7.0%×1.0, [[tau2-bench]] 31.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 43.6 | -0.43 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 60.7 | +0.71 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 72.8 | +1.52 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
