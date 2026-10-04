---
type: Model
title: GPT-4o (Nov)
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: 2.55
output_speed_tps: 119.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.9, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.6, z: -0.86, r: 37.1, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.83, r: 37.5, estimated: false }  # 코딩
  agentic: { s: 12.5, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 61.9, z: 1.64, r: 74.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.1, z: 0.1, r: 51.5, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.97, r: 35.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# GPT-4o (Nov)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.55/1M · 119.0 t/s · TTFT 1.06s · 128k ctx` · 가성비 3.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 37.1 | -0.86 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 37.5 | -0.83 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 74.6 | +1.64 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.5 | +0.1 | 실측 | [[aa-lcr]] 49.0%×1.0 |
| 지시 따르기 | 35.5 | -0.97 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
