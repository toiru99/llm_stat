---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.174
output_speed_tps: 133.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.1, z: 1.39, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 74.4, z: 1.82, r: 77.4, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 69.5, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.96, r: 35.7, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.87, r: 63.0, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.34, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 82.0, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 133.0 t/s · TTFT 114.02s · 1M ctx` · 가성비 212.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.39 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 77.4 | +1.82 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[apex-agents]] 36.0%×1.0, [[gdpval]] 47.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 31.0%×1.0 |
| 신뢰성 | 35.7 | -0.96 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 63.0 | +0.87 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 70.0 | +1.34 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
