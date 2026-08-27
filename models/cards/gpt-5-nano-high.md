---
type: Model
title: GPT-5 nano (high)
creator: OpenAI
license: Proprietary
intelligence_index: 20.0
price_blended_usd_1m: 0.0535
output_speed_tps: 151.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 35.2, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 27.7, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 47.2, z: -0.07, r: 49.0, estimated: false }  # 코딩
  agentic: { s: 27.8, z: -0.36, r: 44.5, estimated: false }  # 에이전트
  trust: { s: 45.3, z: 0.7, r: 60.4, estimated: false }  # 신뢰성
  multimodal: { s: 65.7, z: -0.34, r: 45.0, estimated: false }  # 멀티모달
  long_context: { s: 53.0, z: 0.06, r: 51.0, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.0, r: 65.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 nano (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5 nano (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.05 · 출력 $0.4 · 혼합 $0.0535/1M · 151.0 t/s · TTFT 93.71s · 400k ctx` · 가성비 373.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 49.0 | -0.07 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 12.0%×0.5 |
| 에이전트 | 44.5 | -0.36 | 실측 | [[tau2-bench]] 37.0%×1.0, [[terminal-bench]] 12.0%×1.0 |
| 신뢰성 | 60.4 | +0.7 | 실측 | [[aa-omniscience]] 41.0%×1.0 |
| 멀티모달 | 45.0 | -0.34 | 실측 | [[mmmu-pro]] 61.0%×1.0 |
| 긴문맥 | 51.0 | +0.06 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
