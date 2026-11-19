---
type: Model
title: GPT-5.4 nano (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.179
output_speed_tps: 109.48051508353
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 32.1, z: -0.73, r: 39.0, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.81, r: 37.8, estimated: false }  # 추론
  coding: { s: 36.8, z: -0.11, r: 48.4, estimated: false }  # 코딩
  agentic: { s: 35.9, z: -0.31, r: 45.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 39.0, z: -1.65, r: 25.2, estimated: false }  # 멀티모달
  long_context: { s: 33.5, z: -0.6, r: 41.0, estimated: false }  # 긴문맥
  instruction: { s: 28.9, z: -1.04, r: 34.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GPT-5.4 nano (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 109.48051508353 t/s · TTFT 1.37476599005564s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.0 | -0.73 | 실측 | [[gpqa-diamond]] 55.75757575757579%×0.4, [[humanitys-last-exam]] 4.07784986098239%×0.3 |
| 추론 | 37.8 | -0.81 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 55.75757575757579%×1.0, [[humanitys-last-exam]] 4.07784986098239%×1.0 |
| 코딩 | 48.4 | -0.11 | 실측 | [[terminal-bench]] 24.2424242424242%×0.5 |
| 에이전트 | 45.4 | -0.31 | 실측 | [[tau2-bench]] 34.7953216374269%×1.0, [[terminal-bench]] 24.2424242424242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 25.2 | -1.65 | 실측 | [[mmmu-pro]] 43.757225433525996%×1.0 |
| 긴문맥 | 41.0 | -0.6 | 실측 | [[aa-lcr]] 29.666666666666703%×1.0 |
| 지시 따르기 | 34.4 | -1.04 | 실측 | [[ifbench]] 32.7210884353741%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
