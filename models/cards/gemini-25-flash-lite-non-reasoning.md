---
type: Model
title: Gemini 2.5 Flash-Lite (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.067
output_speed_tps: 276.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.2, z: -0.84, r: 37.4, estimated: false }  # 전문 지식
  reasoning: { s: 16.0, z: -0.92, r: 36.1, estimated: false }  # 추론
  coding: { s: 3.0, z: -1.13, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 11.1, z: -1.04, r: 34.3, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.74, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: 53.4, z: -0.87, r: 36.9, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.47, r: 43.0, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.12, r: 33.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · 276.0 t/s · TTFT 0.32s · 1M ctx` · 가성비 104.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.1 | -0.92 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 33.1 | -1.13 | 실측 | [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 34.3 | -1.04 | 실측 | [[tau2-bench]] 19.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 38.8 | -0.74 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 36.9 | -0.87 | 실측 | [[mmmu-pro]] 54.0%×1.0 |
| 긴문맥 | 43.0 | -0.47 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 33.1 | -1.12 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
