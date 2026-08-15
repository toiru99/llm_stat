---
type: Model
title: GPT-5.2 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 2.4238
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.5, z: 1.06, r: 65.9, estimated: false }  # 전문 지식
  reasoning: { s: 54.2, z: 0.92, r: 63.8, estimated: false }  # 추론
  coding: { s: 72.8, z: 1.01, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 69.9, z: 1.31, r: 69.7, estimated: false }  # 에이전트
  trust: { s: 41.9, z: 0.65, r: 59.8, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.64, r: 59.7, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 74.6, z: 0.83, r: 62.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-15
timestamp: 2026-08-15T00:00:00Z
---

# GPT-5.2 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 신뢰성, 멀티모달

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $2.4238/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 16.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.9 | +1.06 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 63.8 | +0.92 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 65.1 | +1.01 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 69.7 | +1.31 | 실측 | [[tau2-bench]] 74.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 59.8 | +0.65 | 실측 | [[aa-omniscience]] 38.0%×1.0 |
| 멀티모달 | 59.7 | +0.64 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 62.5 | +0.83 | 실측 | [[ifbench]] 65.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
