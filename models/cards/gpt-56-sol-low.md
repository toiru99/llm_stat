---
type: Model
title: GPT-5.6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 3.08
output_speed_tps: 73.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.1, z: 1.89, r: 78.4, estimated: false }  # 전문 지식
  reasoning: { s: 67.7, z: 1.44, r: 71.6, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.7, r: 75.4, estimated: false }  # 코딩
  agentic: { s: 71.1, z: 1.26, r: 68.8, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.79, r: 38.1, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.1, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.98, r: 64.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-5.6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 73.0 t/s · TTFT 2.4s · 1M ctx` · 가성비 10.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.89 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 71.6 | +1.44 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 75.4 | +1.7 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 68.8 | +1.26 | 실측 | [[gdpval]] 39.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 38.1 | -0.79 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 66.6 | +1.1 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 64.6 | +0.98 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
