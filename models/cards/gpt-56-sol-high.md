---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 4.35
output_speed_tps: 68.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.7, z: 2.54, r: 88.1, estimated: false }  # 전문 지식
  reasoning: { s: 87.6, z: 2.86, r: 92.9, estimated: false }  # 추론
  coding: { s: 94.6, z: 2.06, r: 80.8, estimated: false }  # 코딩
  agentic: { s: 90.5, z: 2.12, r: 81.9, estimated: false }  # 에이전트
  trust: { s: 12.9, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: 97.1, z: 1.22, r: 68.4, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 80.3, z: 1.16, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 68.0 t/s · TTFT 27.52s · 1M ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 88.1 | +2.54 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 92.9 | +2.86 | 실측 | [[critpt]] 26.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 80.8 | +2.06 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 62.0%×0.5 |
| 에이전트 | 81.9 | +2.12 | 실측 | [[gdpval]] 57.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 31.0%×1.0, [[terminal-bench]] 62.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | 68.4 | +1.22 | 실측 | [[mmmu-pro]] 82.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 67.3 | +1.16 | 실측 | [[ifbench]] 69.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
