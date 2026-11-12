---
type: Model
title: GPT-5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.4, z: 0.79, r: 61.9, estimated: false }  # 전문 지식
  reasoning: { s: 59.6, z: 0.81, r: 62.1, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.67, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 57.5, z: 0.77, r: 61.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.7, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 82.2, z: 1.27, r: 69.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# GPT-5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.9 | +0.79 | 실측 | [[gpqa-diamond]] 84.2%×0.4, [[humanitys-last-exam]] 25.4%×0.3 |
| 추론 | 62.1 | +0.81 | 실측 | [[gpqa-diamond]] 84.2%×1.0, [[humanitys-last-exam]] 25.4%×1.0 |
| 코딩 | 60.0 | +0.67 | 실측 | [[terminal-bench]] 37.9%×0.5 |
| 에이전트 | 61.6 | +0.77 | 실측 | [[terminal-bench]] 37.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 실측 | [[ifbench]] 70.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
