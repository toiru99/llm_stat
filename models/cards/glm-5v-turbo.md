---
type: Model
title: GLM 5V Turbo
creator: Z AI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 50.6, z: 0.44, r: 56.5, estimated: false }  # 전문 지식
  reasoning: { s: 38.8, z: 0.14, r: 52.1, estimated: false }  # 추론
  coding: { s: 65.6, z: 0.68, r: 60.2, estimated: false }  # 코딩
  agentic: { s: 75.0, z: 1.44, r: 71.7, estimated: false }  # 에이전트
  trust: { s: 33.7, z: 0.2, r: 53.1, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.49, r: 57.3, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.86, r: 62.8, estimated: false }  # 긴문맥
  instruction: { s: 69.0, z: 0.59, r: 58.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM 5V Turbo
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GLM 5V Turbo

Z AI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 신뢰성, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.5 | +0.44 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 52.1 | +0.14 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 60.2 | +0.68 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 71.7 | +1.44 | 실측 | [[tau2-bench]] 99.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 53.1 | +0.2 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | 57.3 | +0.49 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 62.8 | +0.86 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 58.9 | +0.59 | 실측 | [[ifbench]] 61.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
