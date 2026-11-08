---
type: Model
title: GPT-5.4 nano (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.179
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.5, z: -0.74, r: 38.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.74, r: 39.0, estimated: false }  # 추론
  coding: { s: 36.7, z: -0.02, r: 49.7, estimated: false }  # 코딩
  agentic: { s: 29.4, z: -0.17, r: 47.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.2, z: -1.63, r: 25.6, estimated: false }  # 멀티모달
  long_context: { s: 33.5, z: -0.58, r: 41.4, estimated: false }  # 긴문맥
  instruction: { s: 28.9, z: -1.02, r: 34.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-5.4 nano (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.9 | -0.74 | 실측 | [[gpqa-diamond]] 55.8%×0.4, [[humanitys-last-exam]] 4.1%×0.3 |
| 추론 | 39.0 | -0.74 | 실측 | [[gpqa-diamond]] 55.8%×1.0, [[humanitys-last-exam]] 4.1%×1.0 |
| 코딩 | 49.7 | -0.02 | 실측 | [[terminal-bench]] 24.2%×0.5 |
| 에이전트 | 47.5 | -0.17 | 실측 | [[itbench]] 12.9%×1.0, [[terminal-bench]] 24.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.6 | -1.63 | 실측 | [[mmmu-pro]] 44.0%×1.0 |
| 긴문맥 | 41.4 | -0.58 | 실측 | [[aa-lcr]] 29.7%×1.0 |
| 지시 따르기 | 34.7 | -1.02 | 실측 | [[ifbench]] 32.7%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
