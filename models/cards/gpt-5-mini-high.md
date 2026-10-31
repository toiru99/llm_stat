---
type: Model
title: GPT-5 mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 108.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.8, z: 0.59, r: 58.9, estimated: false }  # 전문 지식
  reasoning: { s: 59.1, z: 0.61, r: 59.1, estimated: false }  # 추론
  coding: { s: 52.2, z: 0.51, r: 57.6, estimated: false }  # 코딩
  agentic: { s: 40.3, z: 0.21, r: 53.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.3, z: 0.16, r: 52.4, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.51, r: 72.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-5 mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 108.0 t/s · TTFT 61.34s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.9 | +0.59 | 실측 | [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 59.1 | +0.61 | 실측 | [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 57.6 | +0.51 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 53.1 | +0.21 | 실측 | [[gdpval]] 773.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.4 | +0.16 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 72.6 | +1.51 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
