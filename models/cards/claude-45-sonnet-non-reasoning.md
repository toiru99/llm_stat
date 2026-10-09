---
type: Model
title: Claude 4.5 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 19.0
price_blended_usd_1m: 2.31
output_speed_tps: 43.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 43.6, z: 0.04, r: 50.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.8, z: -0.41, r: 43.9, estimated: false }  # 추론
  coding: { s: 43.9, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 57.3, z: 0.7, r: 60.4, estimated: false }  # 에이전트
  trust: { s: 46.4, z: 0.91, r: 63.6, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.15, r: 47.8, estimated: false }  # 멀티모달
  long_context: { s: 60.7, z: 0.26, r: 53.9, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.45, r: 43.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Claude 4.5 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 43.0 t/s · TTFT 1.1s · 1M ctx` · 가성비 8.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.7 | +0.04 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 43.9 | -0.41 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 60.4 | +0.7 | 실측 | [[tau2-bench]] 70.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 63.6 | +0.91 | 실측 | [[aa-omniscience]] 47.0%×1.0 |
| 멀티모달 | 47.8 | -0.15 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 53.9 | +0.26 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 43.3 | -0.45 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
