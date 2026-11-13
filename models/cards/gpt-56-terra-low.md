---
type: Model
title: GPT-5.6 Terra (low)
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
  knowledge: { s: 65.7, z: 0.89, r: 63.4, estimated: false }  # 전문 지식
  reasoning: { s: 62.3, z: 0.92, r: 63.9, estimated: false }  # 추론
  coding: { s: 69.4, z: 1.05, r: 65.8, estimated: false }  # 코딩
  agentic: { s: 54.3, z: 0.65, r: 59.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.55, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 80.4, z: 0.81, r: 62.2, estimated: false }  # 긴문맥
  instruction: { s: 66.9, z: 0.59, r: 58.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5.6 Terra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.4 | +0.89 | 실측 | [[gpqa-diamond]] 84.3%×0.4, [[humanitys-last-exam]] 29.2%×0.3 |
| 추론 | 63.9 | +0.92 | 실측 | [[gpqa-diamond]] 84.3%×1.0, [[humanitys-last-exam]] 29.2%×1.0 |
| 코딩 | 65.8 | +1.05 | 실측 | [[scicode]] 49.9%×1.0, [[terminal-bench]] 43.9%×0.5 |
| 에이전트 | 59.8 | +0.65 | 실측 | [[gdpval]] 1117.0%×1.0, [[tau3-banking]] 18.8%×1.0, [[terminal-bench]] 43.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.3 | +0.55 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 62.2 | +0.81 | 실측 | [[aa-lcr]] 71.3%×1.0 |
| 지시 따르기 | 58.9 | +0.59 | 실측 | [[ifbench]] 59.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
