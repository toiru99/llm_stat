---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 0.2175
output_speed_tps: 315.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.6, z: 0.81, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 39.5, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 58.8, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 24.3, z: -0.46, r: 43.1, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.4, r: 44.0, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.56, r: 73.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.2175/1M · 315.0 t/s · TTFT 6.02s · 1M ctx` · 가성비 119.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.81 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 43.1 | -0.46 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 7.0%×1.0, [[tau2-bench]] 31.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 44.0 | -0.4 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 73.4 | +1.56 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
