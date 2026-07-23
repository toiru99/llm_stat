---
type: Model
title: GPT-5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 83.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.4, z: 1.19, r: 67.9, estimated: false }  # 전문 지식
  reasoning: { s: 43.5, z: 0.51, r: 57.6, estimated: false }  # 추론
  coding: { s: 64.7, z: 0.77, r: 61.6, estimated: false }  # 코딩
  agentic: { s: 72.7, z: 1.41, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 21.8, z: -0.26, r: 46.1, estimated: false }  # 신뢰성
  multimodal: { s: 85.5, z: 0.65, r: 59.8, estimated: false }  # 멀티모달
  long_context: { s: 96.1, z: 1.4, r: 71.0, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.26, r: 68.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-23
timestamp: 2026-07-23T00:00:00Z
---

# GPT-5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $None/1M · 83.0 t/s · TTFT 36.47s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.9 | +1.19 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 57.6 | +0.51 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 61.6 | +0.77 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 71.2 | +1.41 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 59.8 | +0.65 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 71.0 | +1.4 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 68.8 | +1.26 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
