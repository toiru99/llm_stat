---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: 6.0
price_blended_usd_1m: 0.2175
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.3, z: 0.5, r: 57.5, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: -0.32, r: 45.1, estimated: false }  # 추론
  coding: { s: 52.3, z: 0.49, r: 57.4, estimated: false }  # 코딩
  agentic: { s: 25.9, z: -0.3, r: 45.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.55, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.92, r: 63.8, estimated: false }  # 긴문맥
  instruction: { s: 91.4, z: 1.66, r: 75.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.2175/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 27.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.5 | +0.5 | 실측 | [[gpqa-diamond]] 82.2%×0.4, [[humanitys-last-exam]] 17.2%×0.3 |
| 추론 | 45.1 | -0.32 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 82.2%×1.0, [[humanitys-last-exam]] 17.2%×1.0 |
| 코딩 | 57.4 | +0.49 | 실측 | [[scicode]] 43.4%×1.0, [[terminal-bench]] 24.2%×0.5 |
| 에이전트 | 45.5 | -0.3 | 실측 | [[apex-agents]] 12.2%×1.0, [[gdpval]] 438.0%×1.0, [[tau3-banking]] 9.7%×1.0, [[terminal-bench]] 24.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.3 | +0.55 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 63.8 | +0.92 | 실측 | [[aa-lcr]] 74.3%×1.0 |
| 지시 따르기 | 75.0 | +1.66 | 실측 | [[ifbench]] 77.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
