---
type: Model
title: Claude 4.5 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 2.31
output_speed_tps: 50.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.2, z: 0.65, r: 59.8, estimated: false }  # 전문 지식
  reasoning: { s: 40.2, z: 0.21, r: 53.2, estimated: false }  # 추론
  coding: { s: 68.2, z: 0.79, r: 61.9, estimated: false }  # 코딩
  agentic: { s: 56.0, z: 0.72, r: 60.8, estimated: false }  # 에이전트
  trust: { s: 57.0, z: 1.18, r: 67.8, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.22, r: 53.3, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.93, r: 64.0, estimated: false }  # 긴문맥
  instruction: { s: 63.4, z: 0.37, r: 55.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Claude 4.5 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 50.0 t/s · TTFT 18.96s · 1M ctx` · 가성비 16.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.8 | +0.65 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 53.2 | +0.21 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 61.9 | +0.79 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 60.8 | +0.72 | 실측 | [[gdpval]] 28.0%×1.0, [[tau2-bench]] 78.0%×1.0, [[tau3-banking]] 25.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 67.8 | +1.18 | 실측 | [[aa-omniscience]] 51.0%×1.0 |
| 멀티모달 | 53.3 | +0.22 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 64.0 | +0.93 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 55.5 | +0.37 | 실측 | [[ifbench]] 57.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
