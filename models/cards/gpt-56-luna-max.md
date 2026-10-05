---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.174
output_speed_tps: 125.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.1, z: 1.32, r: 69.8, estimated: false }  # 전문 지식
  reasoning: { s: 74.4, z: 1.72, r: 75.8, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.43, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 69.9, z: 1.19, r: 67.8, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.81, r: 62.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 82.0, z: 1.15, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-05
timestamp: 2026-10-05T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 125.0 t/s · TTFT 107.35s · 1M ctx` · 가성비 212.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.8 | +1.32 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 75.8 | +1.72 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 71.5 | +1.43 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 67.8 | +1.19 | 실측 | [[apex-agents]] 36.0%×1.0, [[gdpval]] 48.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 31.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 62.2 | +0.81 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
