---
type: Model
title: GPT-5.4 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.175
output_speed_tps: 64.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 50.3, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 46.1, z: 0.02, r: 50.3, estimated: false }  # 추론
  coding: { s: 57.6, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 57.6, z: 0.8, r: 62.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.23, r: 53.5, estimated: false }  # 멀티모달
  long_context: { s: 65.2, z: 0.39, r: 55.8, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.08, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GPT-5.4 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 64.0 t/s · TTFT 1.02s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.3 | +0.02 | 실측 | [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 62.1 | +0.8 | 실측 | [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.5 | +0.23 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 55.8 | +0.39 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 48.7 | -0.08 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
