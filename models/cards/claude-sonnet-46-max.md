---
type: Model
title: Claude Sonnet 4.6 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 57.0994627212501
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.4, z: 1.11, r: 66.7, estimated: false }  # 전문 지식
  reasoning: { s: 47.7, z: 0.6, r: 58.9, estimated: false }  # 추론
  coding: { s: 74.2, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 74.1, z: 1.01, r: 65.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.36, r: 55.4, estimated: false }  # 멀티모달
  long_context: { s: 90.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 62.5, z: 0.36, r: 55.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Claude Sonnet 4.6 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 57.0994627212501 t/s · TTFT 80.4589828917463s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.7 | +1.11 | 실측 | [[gpqa-diamond]] 87.4747474747475%×0.4, [[humanitys-last-exam]] 33.595922150139%×0.3 |
| 추론 | 58.9 | +0.6 | 실측 | [[critpt]] 3.14285714285714%×1.0, [[gpqa-diamond]] 87.4747474747475%×1.0, [[humanitys-last-exam]] 33.595922150139%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 50.1157407407407%×1.0, [[terminal-bench]] 53.030303030303%×0.5 |
| 에이전트 | 65.1 | +1.01 | 실측 | [[gdpval]] 1240.2%×1.0, [[tau2-bench]] 75.7309941520468%×1.0, [[tau3-banking]] 34.4329896907216%×1.0, [[terminal-bench]] 53.030303030303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.4 | +0.36 | 실측 | [[mmmu-pro]] 73.2947976878613%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 55.4 | +0.36 | 실측 | [[ifbench]] 56.5986394557823%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
