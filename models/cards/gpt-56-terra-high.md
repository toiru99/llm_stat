---
type: Model
title: GPT-5.6 Terra (high)
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
  knowledge: { s: 79.3, z: 1.32, r: 69.9, estimated: false }  # 전문 지식
  reasoning: { s: 77.1, z: 1.42, r: 71.4, estimated: false }  # 추론
  coding: { s: 79.7, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 72.5, z: 1.3, r: 69.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 73.5, z: 0.87, r: 63.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-5.6 Terra (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.9 | +1.32 | 실측 | [[gpqa-diamond]] 89.6%×0.4, [[humanitys-last-exam]] 38.5%×0.3 |
| 추론 | 71.4 | +1.42 | 실측 | [[gpqa-diamond]] 89.6%×1.0, [[humanitys-last-exam]] 38.5%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[scicode]] 52.4%×1.0, [[terminal-bench]] 57.6%×0.5 |
| 에이전트 | 69.6 | +1.3 | 실측 | [[gdpval]] 1387.0%×1.0, [[tau3-banking]] 28.7%×1.0, [[terminal-bench]] 57.6%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 77.7%×1.0 |
| 지시 따르기 | 63.1 | +0.87 | 실측 | [[ifbench]] 64.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
