---
type: Model
title: Claude 4.5 Sonnet (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 2.31
output_speed_tps: 41.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.6, z: 0.09, r: 51.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.8, z: -0.37, r: 44.5, estimated: false }  # 추론
  coding: { s: 43.9, z: 0.31, r: 54.7, estimated: false }  # 코딩
  agentic: { s: 57.3, z: 0.75, r: 61.3, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 0.97, r: 64.5, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.1, r: 48.6, estimated: false }  # 멀티모달
  long_context: { s: 60.7, z: 0.31, r: 54.6, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.41, r: 43.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Claude 4.5 Sonnet (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 41.0 t/s · TTFT 1.23s · 1M ctx` · 가성비 8.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.4 | +0.09 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 44.5 | -0.37 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 54.7 | +0.31 | 실측 | [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 61.3 | +0.75 | 실측 | [[tau2-bench]] 70.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 64.5 | +0.97 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 48.6 | -0.1 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 54.6 | +0.31 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 43.9 | -0.41 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
