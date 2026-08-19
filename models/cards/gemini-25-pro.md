---
type: Model
title: Gemini 2.5 Pro
creator: Google
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 1.3375
output_speed_tps: 133.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.6, z: 1.02, r: 65.2, estimated: false }  # 전문 지식
  reasoning: { s: 45.7, z: 0.5, r: 57.5, estimated: false }  # 추론
  coding: { s: 61.4, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.2, r: 47.0, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.64, r: 59.6, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.88, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.09, r: 48.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Gemini 2.5 Pro

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 133.0 t/s · TTFT 20.8s · 1M ctx` · 가성비 19.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.2 | +1.02 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 57.5 | +0.5 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 47.0 | -0.2 | 실측 | [[gdpval]] 8.0%×1.0, [[tau2-bench]] 54.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 59.6 | +0.64 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 63.1 | +0.88 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 48.6 | -0.09 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
