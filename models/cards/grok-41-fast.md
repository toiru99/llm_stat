---
type: Model
title: Grok 4.1 Fast
creator: SpaceXAI
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 47.8, z: 0.24, r: 53.6, estimated: false }  # 전문 지식
  reasoning: { s: 42.2, z: 0.25, r: 53.8, estimated: false }  # 추론
  coding: { s: 36.4, z: -0.02, r: 49.8, estimated: false }  # 코딩
  agentic: { s: 65.2, z: 1.0, r: 64.9, estimated: false }  # 에이전트
  trust: { s: 25.8, z: -0.05, r: 49.3, estimated: false }  # 신뢰성
  multimodal: { s: 65.8, z: -0.28, r: 45.7, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: 57.7, z: 0.14, r: 52.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.1 Fast
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Grok 4.1 Fast

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 2M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.6 | +0.24 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 53.8 | +0.25 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 49.8 | -0.02 | 실측 | [[terminal-bench]] 24.0%×0.5 |
| 에이전트 | 64.9 | +1.0 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 24.0%×1.0 |
| 신뢰성 | 49.3 | -0.05 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | 45.7 | -0.28 | 실측 | [[mmmu-pro]] 63.0%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 실측 | [[ifbench]] 53.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
