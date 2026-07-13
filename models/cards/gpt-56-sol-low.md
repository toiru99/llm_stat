---
type: Model
title: GPT-5.6 Sol (low)
creator: OpenAI
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 4.35
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.5, z: 2.34, r: 85.1, estimated: false }  # 전문 지식
  reasoning: { s: 70.4, z: 1.96, r: 79.4, estimated: false }  # 추론
  coding: { s: 91.9, z: 1.95, r: 79.2, estimated: false }  # 코딩
  agentic: { s: 79.1, z: 1.67, r: 75.1, estimated: false }  # 에이전트
  trust: { s: 14.1, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: 95.7, z: 1.16, r: 67.3, estimated: false }  # 멀티모달
  long_context: { s: 89.5, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.03, r: 65.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# GPT-5.6 Sol (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 63.0 t/s · TTFT 2.48s · 1M ctx` · 가성비 11.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.1 | +2.34 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 79.4 | +1.96 | 실측 | [[critpt]] 15.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 79.2 | +1.95 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 61.0%×0.5 |
| 에이전트 | 75.1 | +1.67 | 실측 | [[gdpval]] 47.0%×1.0, [[tau2-bench]] 76.0%×1.0, [[tau3-banking]] 24.0%×1.0, [[terminal-bench]] 61.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 67.3 | +1.16 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 65.5 | +1.03 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
