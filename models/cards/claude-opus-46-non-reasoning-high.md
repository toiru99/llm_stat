---
type: Model
title: Claude Opus 4.6 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 3.85
output_speed_tps: 39.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 65.9, z: 1.15, r: 67.2, estimated: false }  # 전문 지식
  reasoning: { s: 41.8, z: 0.29, r: 54.4, estimated: false }  # 추론
  coding: { s: 72.7, z: 1.31, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 79.3, z: 1.6, r: 74.0, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.33, r: 45.0, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.46, r: 56.8, estimated: false }  # 멀티모달
  long_context: { s: 75.3, z: 0.75, r: 61.3, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.29, r: 45.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Claude Opus 4.6 (Non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 39.0 t/s · TTFT 2.47s · 1M ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.2 | +1.15 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 54.4 | +0.29 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 69.6 | +1.31 | 실측 | [[terminal-bench]] 48.0%×0.5 |
| 에이전트 | 74.0 | +1.6 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 48.0%×1.0 |
| 신뢰성 | 45.0 | -0.33 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 56.8 | +0.46 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 61.3 | +0.75 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 45.7 | -0.29 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
