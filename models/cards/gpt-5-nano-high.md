---
type: Model
title: GPT-5 nano (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.0535
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.1, z: -0.19, r: 47.2, estimated: false }  # 전문 지식
  reasoning: { s: 39.1, z: -0.2, r: 47.0, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.56, r: 41.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 62.2, z: -0.47, r: 43.0, estimated: false }  # 멀티모달
  long_context: { s: 50.7, z: -0.07, r: 49.0, estimated: false }  # 긴문맥
  instruction: { s: 77.9, z: 1.08, r: 66.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# GPT-5 nano (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.2 | -0.19 | 실측 | [[gpqa-diamond]] 67.6%×0.4, [[humanitys-last-exam]] 9.5%×0.3 |
| 추론 | 47.0 | -0.2 | 실측 | [[gpqa-diamond]] 67.6%×1.0, [[humanitys-last-exam]] 9.5%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[terminal-bench]] 12.1%×0.5 |
| 에이전트 | 41.6 | -0.56 | 실측 | [[terminal-bench]] 12.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.0 | -0.47 | 실측 | [[mmmu-pro]] 61.0%×1.0 |
| 긴문맥 | 49.0 | -0.07 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 실측 | [[ifbench]] 67.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
