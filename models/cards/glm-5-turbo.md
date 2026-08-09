---
type: Model
title: GLM-5-Turbo
creator: Z AI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.6, z: 0.67, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 46.4, z: 0.57, r: 58.6, estimated: false }  # 추론
  coding: { s: 65.6, z: 0.76, r: 61.3, estimated: false }  # 코딩
  agentic: { s: 75.0, z: 1.56, r: 73.4, estimated: false }  # 에이전트
  trust: { s: 40.7, z: 0.66, r: 59.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.33, r: 70.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5-Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-09
timestamp: 2026-08-09T00:00:00Z
---

# GLM-5-Turbo

Z AI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.67 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 58.6 | +0.57 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 61.3 | +0.76 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 73.4 | +1.56 | 실측 | [[tau2-bench]] 99.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 59.9 | +0.66 | 실측 | [[aa-omniscience]] 37.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 70.0 | +1.33 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
