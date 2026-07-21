---
type: Model
title: GPT-5.2
creator: OpenAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: None
output_speed_tps: 76.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.6, z: 0.29, r: 54.3, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 60.6, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 43.8, z: 0.29, r: 54.3, estimated: false }  # 에이전트
  trust: { s: 44.7, z: 0.8, r: 62.0, estimated: false }  # 신뢰성
  multimodal: { s: 73.9, z: 0.11, r: 51.6, estimated: false }  # 멀티모달
  long_context: { s: 50.0, z: 0.04, r: 50.5, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.14, r: 48.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# GPT-5.2

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $None/1M · 76.0 t/s · TTFT 0.99s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.3 | +0.29 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 54.3 | +0.29 | 실측 | [[tau2-bench]] 46.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 62.0 | +0.8 | 실측 | [[aa-omniscience]] 39.0%×1.0 |
| 멀티모달 | 51.6 | +0.11 | 실측 | [[mmmu-pro]] 66.0%×1.0 |
| 긴문맥 | 50.5 | +0.04 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 48.0 | -0.14 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
