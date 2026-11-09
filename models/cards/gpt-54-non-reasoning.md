---
type: Model
title: GPT-5.4 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.2, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 46.0, z: 0.03, r: 50.4, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.67, r: 60.0, estimated: false }  # 코딩
  agentic: { s: 57.5, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.7, z: 0.21, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 65.7, z: 0.39, r: 55.8, estimated: false }  # 긴문맥
  instruction: { s: 51.0, z: -0.08, r: 48.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# GPT-5.4 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 74.8%×0.4, [[humanitys-last-exam]] 11.3%×0.3 |
| 추론 | 50.4 | +0.03 | 실측 | [[gpqa-diamond]] 74.8%×1.0, [[humanitys-last-exam]] 11.3%×1.0 |
| 코딩 | 60.0 | +0.67 | 실측 | [[terminal-bench]] 37.9%×0.5 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[terminal-bench]] 37.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.21 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 55.8 | +0.39 | 실측 | [[aa-lcr]] 58.3%×1.0 |
| 지시 따르기 | 48.8 | -0.08 | 실측 | [[ifbench]] 48.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
