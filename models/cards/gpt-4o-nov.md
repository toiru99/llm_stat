---
type: Model
title: GPT-4o (Nov)
creator: OpenAI
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 2.55
output_speed_tps: 132.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.6, z: -0.5, r: 42.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.9, z: -0.84, r: 37.4, estimated: false }  # 추론
  coding: { s: 40.7, z: -0.29, r: 45.7, estimated: false }  # 코딩
  agentic: { s: 18.7, z: -0.71, r: 39.3, estimated: false }  # 에이전트
  trust: { s: 61.9, z: 1.8, r: 76.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.51, r: 27.3, estimated: false }  # 긴문맥
  instruction: { s: 31.0, z: -0.9, r: 36.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (Nov)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# GPT-4o (Nov)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.5 · 출력 $10.0 · 혼합 $2.55/1M · 132.0 t/s · TTFT 0.89s · 128k ctx` · 가성비 4.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.5 | -0.5 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 37.4 | -0.84 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 45.7 | -0.29 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 39.3 | -0.71 | 실측 | [[tau2-bench]] 25.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 76.9 | +1.8 | 실측 | [[aa-omniscience]] 62.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.3 | -1.51 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 36.6 | -0.9 | 실측 | [[ifbench]] 34.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
