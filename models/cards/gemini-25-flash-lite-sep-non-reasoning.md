---
type: Model
title: Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.5, z: -0.62, r: 40.7, estimated: false }  # 전문 지식
  reasoning: { s: 23.5, z: -0.56, r: 41.5, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.79, r: 38.1, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.64, r: 40.4, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.34, r: 55.1, estimated: false }  # 신뢰성
  multimodal: { s: 65.8, z: -0.23, r: 46.5, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.17, r: 52.5, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.46, r: 43.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 134.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.5 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 38.1 | -0.79 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.4 | -0.64 | 실측 | [[tau2-bench]] 30.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 55.1 | +0.34 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 46.5 | -0.23 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 52.5 | +0.17 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 43.0 | -0.46 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
