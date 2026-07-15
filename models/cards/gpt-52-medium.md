---
type: Model
title: GPT-5.2 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 2.42
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.7, z: 1.23, r: 68.4, estimated: false }  # 전문 지식
  reasoning: { s: 53.9, z: 1.08, r: 66.2, estimated: false }  # 추론
  coding: { s: 72.8, z: 1.13, r: 67.0, estimated: false }  # 코딩
  agentic: { s: 69.9, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: 44.7, z: 0.8, r: 62.0, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.92, r: 63.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# GPT-5.2 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $2.42/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 15.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.4 | +1.23 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 66.2 | +1.08 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 67.0 | +1.13 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 62.0 | +0.8 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
