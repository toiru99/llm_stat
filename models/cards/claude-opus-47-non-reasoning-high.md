---
type: Model
title: Claude Opus 4.7 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 3.85
output_speed_tps: 45.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 70.8, z: 1.49, r: 72.3, estimated: false }  # 전문 지식
  reasoning: { s: 54.2, z: 0.96, r: 64.4, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.45, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.61, r: 74.2, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.98, r: 64.7, estimated: false }  # 신뢰성
  multimodal: { s: 85.9, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.11, r: 66.7, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.33, r: 45.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Opus 4.7 (Non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 45.0 t/s · TTFT 0.91s · 1M ctx` · 가성비 11.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.3 | +1.49 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 64.4 | +0.96 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 71.7 | +1.45 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 55.0%×0.5 |
| 에이전트 | 74.2 | +1.61 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 55.0%×1.0 |
| 신뢰성 | 64.7 | +0.98 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 66.7 | +1.11 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 45.1 | -0.33 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
