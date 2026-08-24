---
type: Model
title: Gemini 3 Pro Preview (low)
creator: Google
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.2, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 48.3, z: 0.61, r: 59.2, estimated: false }  # 추론
  coding: { s: 72.7, z: 0.98, r: 64.8, estimated: false }  # 코딩
  agentic: { s: 60.1, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.8, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: -0.03, r: 49.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# Gemini 3 Pro Preview (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 19.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 59.2 | +0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 64.8 | +0.98 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 37.9 | -0.8 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 49.5 | -0.03 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
