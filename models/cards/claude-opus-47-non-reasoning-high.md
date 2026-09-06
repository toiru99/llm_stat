---
type: Model
title: Claude Opus 4.7 (Non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 3.85
output_speed_tps: 47.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 70.6, z: 1.43, r: 71.4, estimated: false }  # 전문 지식
  reasoning: { s: 53.8, z: 0.9, r: 63.6, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.78, r: 76.8, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.59, r: 73.9, estimated: false }  # 에이전트
  trust: { s: 45.4, z: 0.98, r: 64.8, estimated: false }  # 신뢰성
  multimodal: { s: 84.7, z: 0.72, r: 60.8, estimated: false }  # 멀티모달
  long_context: { s: 85.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (Non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Claude Opus 4.7 (Non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 47.0 t/s · TTFT 1.07s · 1M ctx` · 가성비 9.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.4 | +1.43 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 88.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 63.6 | +0.9 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 88.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 76.8 | +1.78 | 실측 | [[terminal-bench]] 55.0%×0.5 |
| 에이전트 | 73.9 | +1.59 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 55.0%×1.0 |
| 신뢰성 | 64.8 | +0.98 | 실측 | [[aa-omniscience]] 46.0%×1.0 |
| 멀티모달 | 60.8 | +0.72 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
