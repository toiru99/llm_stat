---
type: Model
title: Claude Opus 4.6 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: None
output_speed_tps: 37.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 70.0, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 44.0, z: 0.49, r: 57.3, estimated: false }  # 추론
  coding: { s: 75.4, z: 1.19, r: 67.9, estimated: false }  # 코딩
  agentic: { s: 79.3, z: 1.66, r: 74.9, estimated: false }  # 에이전트
  trust: { s: 26.4, z: -0.08, r: 48.8, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.55, r: 58.2, estimated: false }  # 멀티모달
  long_context: { s: 76.3, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.27, r: 45.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# Claude Opus 4.6 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $None/1M · 37.0 t/s · TTFT 2.37s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 57.3 | +0.49 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 67.9 | +1.19 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 48.0%×0.5 |
| 에이전트 | 74.9 | +1.66 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 48.0%×1.0 |
| 신뢰성 | 48.8 | -0.08 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | 58.2 | +0.55 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 45.9 | -0.27 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
