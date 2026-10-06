---
type: Model
title: GPT-6 Astra (low)
creator: OpenAI
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 7.7
output_speed_tps: 57.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.5, z: 2.17, r: 82.6, estimated: false }  # 전문 지식
  reasoning: { s: 85.9, z: 2.24, r: 83.7, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.43, r: 71.5, estimated: false }  # 코딩
  agentic: { s: 63.0, z: 0.92, r: 63.9, estimated: false }  # 에이전트
  trust: { s: 52.6, z: 1.21, r: 68.1, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.22, r: 68.3, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.14, r: 67.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GPT-6 Astra (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 57.0 t/s · TTFT 2.55s · 1M ctx` · 가성비 6.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.6 | +2.17 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 83.7 | +2.24 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 71.5 | +1.43 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 63.9 | +0.92 | 실측 | [[gdpval]] 43.0%×1.0, [[tau3-banking]] 32.0%×1.0 |
| 신뢰성 | 68.1 | +1.21 | 실측 | [[aa-omniscience]] 53.0%×1.0 |
| 멀티모달 | 68.3 | +1.22 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 67.3 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
