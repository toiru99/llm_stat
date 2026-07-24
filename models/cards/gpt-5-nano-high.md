---
type: Model
title: GPT-5 nano (high)
creator: OpenAI
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: None
output_speed_tps: 157.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.3, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 27.5, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 47.2, z: 0.03, r: 50.4, estimated: false }  # 코딩
  agentic: { s: 27.8, z: -0.33, r: 45.1, estimated: false }  # 에이전트
  trust: { s: 49.4, z: 1.03, r: 65.5, estimated: false }  # 신뢰성
  multimodal: { s: 66.7, z: -0.25, r: 46.3, estimated: false }  # 멀티모달
  long_context: { s: 55.3, z: 0.18, r: 52.8, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.08, r: 66.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# GPT-5 nano (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $None/1M · 157.0 t/s · TTFT 94.66s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 50.4 | +0.03 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 45.1 | -0.33 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 65.5 | +1.03 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | 46.3 | -0.25 | 실측 | [[mmmu-pro]] 61.0%×1.0 |
| 긴문맥 | 52.8 | +0.18 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 66.1 | +1.08 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
