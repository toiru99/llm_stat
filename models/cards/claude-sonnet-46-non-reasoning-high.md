---
type: Model
title: Claude Sonnet 4.6 (non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: 25.0
price_blended_usd_1m: 2.31
output_speed_tps: 48.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.64, r: 59.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: -0.11, r: 48.4, estimated: false }  # 추론
  coding: { s: 69.7, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 69.7, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: 29.9, z: 0.12, r: 51.8, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.23, r: 53.4, estimated: false }  # 멀티모달
  long_context: { s: 76.4, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.58, r: 41.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Sonnet 4.6 (non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **25.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 48.0 t/s · TTFT 1.04s · 1M ctx` · 가성비 10.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.5 | +0.64 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 48.4 | -0.11 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 31.0%×1.0 |
| 멀티모달 | 53.4 | +0.23 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 41.3 | -0.58 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
