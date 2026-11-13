---
type: Model
title: GPT-5.6 Terra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.0, z: 1.1, r: 66.5, estimated: false }  # 전문 지식
  reasoning: { s: 66.7, z: 1.14, r: 67.1, estimated: false }  # 추론
  coding: { s: 71.7, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 59.0, z: 0.81, r: 62.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.8, z: 0.62, r: 59.3, estimated: false }  # 멀티모달
  long_context: { s: 83.4, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 70.4, z: 0.74, r: 61.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5.6 Terra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.5 | +1.1 | 실측 | [[gpqa-diamond]] 87.2%×0.4, [[humanitys-last-exam]] 33.3%×0.3 |
| 추론 | 67.1 | +1.14 | 실측 | [[gpqa-diamond]] 87.2%×1.0, [[humanitys-last-exam]] 33.3%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 50.5%×1.0 |
| 에이전트 | 62.2 | +0.81 | 실측 | [[gdpval]] 1274.0%×1.0, [[tau3-banking]] 25.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.3 | +0.62 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 61.2 | +0.74 | 실측 | [[ifbench]] 62.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
