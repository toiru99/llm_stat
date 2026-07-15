---
type: Model
title: Gemini 3 Pro Preview (low)
creator: Google
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.4, z: 1.74, r: 76.2, estimated: false }  # 전문 지식
  reasoning: { s: 48.7, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 72.7, z: 1.13, r: 66.9, estimated: false }  # 코딩
  agentic: { s: 60.1, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.53, r: 42.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.18, r: 67.7, estimated: false }  # 긴문맥
  instruction: { s: 53.5, z: 0.05, r: 50.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Pro Preview (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# Gemini 3 Pro Preview (low)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 19.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.2 | +1.74 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 66.9 | +1.13 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[tau2-bench]] 68.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.7 | +1.18 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 50.8 | +0.05 | 실측 | [[ifbench]] 50.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
