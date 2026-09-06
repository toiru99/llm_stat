---
type: Model
title: Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)
creator: Google
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 0.067
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.6, z: -0.6, r: 41.1, estimated: false }  # 전문 지식
  reasoning: { s: 23.6, z: -0.55, r: 41.7, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.7, r: 39.5, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.62, r: 40.7, estimated: false }  # 에이전트
  trust: { s: 33.0, z: 0.4, r: 56.0, estimated: false }  # 신뢰성
  multimodal: { s: 66.7, z: -0.17, r: 47.4, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.44, r: 43.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 2.5 Flash-Lite (Sep) (Non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.4 · 혼합 $0.067/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 104.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.1 | -0.6 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 65.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 41.7 | -0.55 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 65.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 39.5 | -0.7 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 40.7 | -0.62 | 실측 | [[tau2-bench]] 30.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 56.0 | +0.4 | 실측 | [[aa-omniscience]] 34.0%×1.0 |
| 멀티모달 | 47.4 | -0.17 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 43.5 | -0.44 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
