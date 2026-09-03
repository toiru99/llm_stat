---
type: Model
title: Grok 4.1 Fast
creator: SpaceXAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.2, z: 0.37, r: 55.6, estimated: false }  # 전문 지식
  reasoning: { s: 42.9, z: 0.4, r: 56.0, estimated: false }  # 추론
  coding: { s: 59.4, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 65.2, z: 1.08, r: 66.1, estimated: false }  # 에이전트
  trust: { s: 25.8, z: 0.05, r: 50.8, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.14, r: 47.9, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.04, r: 65.6, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.2, r: 53.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Grok 4.1 Fast

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.6 | +0.37 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 56.0 | +0.4 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 66.1 | +1.08 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 50.8 | +0.05 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 47.9 | -0.14 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 65.6 | +1.04 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 53.0 | +0.2 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
