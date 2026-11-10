---
type: Model
title: GPT-5.1 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.5, z: -0.41, r: 43.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.4, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 34.4, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 34.4, z: -0.01, r: 49.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.5, z: -0.4, r: 44.0, estimated: false }  # 멀티모달
  long_context: { s: 50.7, z: -0.07, r: 49.0, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# GPT-5.1 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.9 | -0.41 | 실측 | [[gpqa-diamond]] 64.3%×0.4, [[humanitys-last-exam]] 5.3%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[gpqa-diamond]] 64.3%×1.0, [[humanitys-last-exam]] 5.3%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[terminal-bench]] 22.7%×0.5 |
| 에이전트 | 49.8 | -0.01 | 실측 | [[terminal-bench]] 22.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.0 | -0.4 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 49.0 | -0.07 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 44.1 | -0.39 | 실측 | [[ifbench]] 43.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
