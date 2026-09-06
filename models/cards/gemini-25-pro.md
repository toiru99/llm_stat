---
type: Model
title: Gemini 2.5 Pro
creator: Google
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 1.3375
output_speed_tps: 131.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.2, z: 0.98, r: 64.6, estimated: false }  # 전문 지식
  reasoning: { s: 44.5, z: 0.45, r: 56.8, estimated: false }  # 추론
  coding: { s: 40.9, z: 0.3, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 31.1, z: -0.25, r: 46.3, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 83.3, z: 0.65, r: 59.8, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.88, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.02, r: 49.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Gemini 2.5 Pro

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 131.0 t/s · TTFT 21.57s · 1M ctx` · 가성비 14.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.6 | +0.98 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 56.8 | +0.45 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 54.6 | +0.3 | 실측 | [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 46.3 | -0.25 | 실측 | [[gdpval]] 6.0%×1.0, [[tau2-bench]] 54.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 59.8 | +0.65 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 63.1 | +0.88 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 49.6 | -0.02 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
