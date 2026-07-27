---
type: Model
title: GPT-5.2 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: None
output_speed_tps: 79.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.1, z: 1.65, r: 74.7, estimated: false }  # 전문 지식
  reasoning: { s: 66.0, z: 1.59, r: 73.9, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.45, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 78.5, z: 1.63, r: 74.5, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.3, r: 45.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 96.1, z: 1.38, r: 70.7, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.47, r: 72.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# GPT-5.2 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **42.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $None/1M · 79.0 t/s · TTFT 111.51s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.7 | +1.65 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 73.9 | +1.59 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 71.7 | +1.45 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 74.5 | +1.63 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 45.6 | -0.3 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.7 | +1.38 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 72.1 | +1.47 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
