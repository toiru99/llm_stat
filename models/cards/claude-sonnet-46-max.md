---
type: Model
title: Claude Sonnet 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 2.31
output_speed_tps: 47.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.1, z: 1.36, r: 70.4, estimated: false }  # 전문 지식
  reasoning: { s: 54.1, z: 0.95, r: 64.3, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.31, r: 69.7, estimated: false }  # 코딩
  agentic: { s: 69.8, z: 1.36, r: 70.3, estimated: false }  # 에이전트
  trust: { s: 58.1, z: 1.46, r: 71.9, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.21, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.4, r: 56.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Claude Sonnet 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 47.0 t/s · TTFT 109.73s · 1M ctx` · 가성비 20.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.4 | +1.36 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 64.3 | +0.95 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 69.7 | +1.31 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 53.0%×0.5 |
| 에이전트 | 70.3 | +1.36 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 44.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 34.0%×1.0, [[terminal-bench]] 53.0%×1.0 |
| 신뢰성 | 71.9 | +1.46 | 실측 | [[aa-omniscience]] 52.0%×1.0 |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 68.1 | +1.21 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 56.0 | +0.4 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
