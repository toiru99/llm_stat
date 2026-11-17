---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 100.94861859711212
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.2, z: 1.65, r: 74.7, estimated: false }  # 전문 지식
  reasoning: { s: 76.5, z: 2.04, r: 80.5, estimated: false }  # 추론
  coding: { s: 87.2, z: 1.61, r: 74.2, estimated: false }  # 코딩
  agentic: { s: 83.5, z: 1.35, r: 70.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.1, z: 0.96, r: 64.4, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 80.1, z: 1.11, r: 66.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 100.94861859711212 t/s · TTFT 9.678869015066143s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.7 | +1.65 | 실측 | [[gpqa-diamond]] 92.82828282828281%×0.4, [[humanitys-last-exam]] 46.014828544949%×0.3 |
| 추론 | 80.5 | +2.04 | 실측 | [[critpt]] 25.7142857142857%×1.0, [[gpqa-diamond]] 92.82828282828281%×1.0, [[humanitys-last-exam]] 46.014828544949%×1.0 |
| 코딩 | 74.2 | +1.61 | 실측 | [[scicode]] 57.7546296296296%×1.0, [[terminal-bench]] 62.121212121212096%×0.5 |
| 에이전트 | 70.2 | +1.35 | 실측 | [[gdpval]] 1511.27%×1.0, [[tau2-bench]] 83.3333333333333%×1.0, [[tau3-banking]] 36.701030927835%×1.0, [[terminal-bench]] 62.121212121212096%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.4 | +0.96 | 실측 | [[mmmu-pro]] 81.84971098265899%×1.0 |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 81.6666666666667%×1.0 |
| 지시 따르기 | 66.6 | +1.11 | 실측 | [[ifbench]] 69.1836734693878%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
