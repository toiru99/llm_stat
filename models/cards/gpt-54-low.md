---
type: Model
title: GPT-5.4 (low)
creator: OpenAI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: None
output_speed_tps: 85.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.71, r: 75.6, estimated: false }  # 전문 지식
  reasoning: { s: 55.8, z: 1.15, r: 67.3, estimated: false }  # 추론
  coding: { s: 77.3, z: 1.3, r: 69.4, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 1.33, r: 69.9, estimated: false }  # 에이전트
  trust: { s: 20.7, z: -0.33, r: 45.1, estimated: false }  # 신뢰성
  multimodal: { s: 91.3, z: 0.93, r: 63.9, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.96, r: 64.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# GPT-5.4 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $None/1M · 85.0 t/s · TTFT 2.33s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.6 | +1.71 | 실측 | [[aa-omniscience]] 47.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 67.3 | +1.15 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 69.4 | +1.3 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 69.9 | +1.33 | 실측 | [[tau2-bench]] 75.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 45.1 | -0.33 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | 63.9 | +0.93 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 64.4 | +0.96 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
