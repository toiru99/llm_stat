---
type: Model
title: GPT-5.6 Sol (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 107.63756928573491
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.1, z: 1.7, r: 75.4, estimated: false }  # 전문 지식
  reasoning: { s: 79.8, z: 2.2, r: 83.1, estimated: false }  # 추론
  coding: { s: 86.0, z: 1.58, r: 73.6, estimated: false }  # 코딩
  agentic: { s: 85.0, z: 1.4, r: 71.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.2, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 82.7, z: 1.21, r: 68.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.6 Sol (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 107.63756928573491 t/s · TTFT 17.492156927179124s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.4 | +1.7 | 실측 | [[gpqa-diamond]] 93.13131313131309%×0.4, [[humanitys-last-exam]] 47.3123262279889%×0.3 |
| 추론 | 83.1 | +2.2 | 실측 | [[critpt]] 28.571428571428598%×1.0, [[gpqa-diamond]] 93.13131313131309%×1.0, [[humanitys-last-exam]] 47.3123262279889%×1.0 |
| 코딩 | 73.6 | +1.58 | 실측 | [[scicode]] 57.0601851851852%×1.0, [[terminal-bench]] 61.363636363636395%×0.5 |
| 에이전트 | 71.0 | +1.4 | 실측 | [[gdpval]] 1577.34%×1.0, [[tau2-bench]] 84.7953216374269%×1.0, [[tau3-banking]] 38.144329896907195%×1.0, [[terminal-bench]] 61.363636363636395%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 82.6589595375723%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 82.3333333333333%×1.0 |
| 지시 따르기 | 68.2 | +1.21 | 실측 | [[ifbench]] 71.0204081632653%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
