---
type: Model
title: Gemini 2.5 Pro
creator: Google
license: Proprietary
intelligence_index: 16.0
price_blended_usd_1m: 1.3375
output_speed_tps: 120.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.86, r: 63.0, estimated: false }  # 전문 지식
  reasoning: { s: 44.0, z: 0.36, r: 55.3, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.72, r: 60.9, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.37, r: 44.5, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.89, r: 36.7, estimated: false }  # 신뢰성
  multimodal: { s: 82.2, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.07, r: 48.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 2.5 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Gemini 2.5 Pro

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **16.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 긴문맥
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 120.0 t/s · TTFT 22.31s · 1M ctx` · 가성비 12.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.0 | +0.86 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 55.3 | +0.36 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 60.9 | +0.72 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 44.5 | -0.37 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 54.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 36.7 | -0.89 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 48.9 | -0.07 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
