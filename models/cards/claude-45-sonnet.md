---
type: Model
title: Claude 4.5 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 2.31
output_speed_tps: 48.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 55.6, z: 0.74, r: 61.1, estimated: false }  # 전문 지식
  reasoning: { s: 40.2, z: 0.29, r: 54.3, estimated: false }  # 추론
  coding: { s: 68.2, z: 0.86, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 56.2, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: 50.5, z: 1.25, r: 68.7, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.3, r: 54.5, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.47, r: 57.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Claude 4.5 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 48.0 t/s · TTFT 18.96s · 1M ctx` · 가성비 16.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.1 | +0.74 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 54.3 | +0.29 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 63.0 | +0.86 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 28.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[tau3-banking]] 25.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 68.7 | +1.25 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 54.5 | +0.3 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 57.0 | +0.47 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
