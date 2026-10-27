---
type: Model
title: Claude Sonnet 4.6 (non-reasoning, low)
creator: Anthropic
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 2.31
output_speed_tps: 51.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.6, z: 0.53, r: 57.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.7, z: -0.16, r: 47.6, estimated: false }  # 추론
  coding: { s: 63.6, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 1.0, r: 64.9, estimated: false }  # 에이전트
  trust: { s: 38.1, z: 0.49, r: 57.4, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.09, r: 51.4, estimated: false }  # 멀티모달
  long_context: { s: 77.5, z: 0.74, r: 61.1, estimated: false }  # 긴문맥
  instruction: { s: 42.3, z: -0.52, r: 42.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (non-reasoning, low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Sonnet 4.6 (non-reasoning, low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 51.0 t/s · TTFT 1.0s · 1M ctx` · 가성비 10.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.9 | +0.53 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 47.6 | -0.16 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 64.9 | +1.0 | 실측 | [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 57.4 | +0.49 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 51.4 | +0.09 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 61.1 | +0.74 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 42.2 | -0.52 | 실측 | [[ifbench]] 42.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
