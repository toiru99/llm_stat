---
type: Model
title: Gemini 3.1 Flash-Lite
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2175
output_speed_tps: 351.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 59.3, z: 0.43, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 55.2, z: 0.43, r: 56.4, estimated: false }  # 추론
  coding: { s: 52.1, z: 0.5, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 25.8, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.6, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 91.5, z: 1.62, r: 74.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Flash-Lite
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Gemini 3.1 Flash-Lite

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $1.5 · 혼합 $0.2175/1M · 351.0 t/s · TTFT 4.91s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.5 | +0.43 | 실측 | [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 56.4 | +0.43 | 실측 | [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 57.6 | +0.5 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[apex-agents]] 12.0%×1.0, [[gdpval]] 438.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 74.4 | +1.62 | 실측 | [[ifbench]] 77.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
