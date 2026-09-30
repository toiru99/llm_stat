---
type: Model
title: GPT-5.6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 3.08
output_speed_tps: 77.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.0, z: 2.12, r: 81.8, estimated: false }  # 전문 지식
  reasoning: { s: 87.9, z: 2.36, r: 85.4, estimated: false }  # 추론
  coding: { s: 86.4, z: 1.73, r: 76.0, estimated: false }  # 코딩
  agentic: { s: 82.6, z: 1.7, r: 75.5, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.94, r: 35.9, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.12, r: 66.7, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-5.6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 77.0 t/s · TTFT 41.79s · 1M ctx` · 가성비 14.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.8 | +2.12 | 실측 | [[aa-omniscience]] 59.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 47.0%×0.3 |
| 추론 | 85.4 | +2.36 | 실측 | [[critpt]] 29.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 47.0%×1.0 |
| 코딩 | 76.0 | +1.73 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 75.5 | +1.7 | 실측 | [[gdpval]] 52.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 38.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 66.7 | +1.12 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
