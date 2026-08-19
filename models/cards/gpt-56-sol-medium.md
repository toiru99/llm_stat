---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 56.0
price_blended_usd_1m: 4.35
output_speed_tps: 63.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.8, z: 2.26, r: 83.9, estimated: false }  # 전문 지식
  reasoning: { s: 81.8, z: 2.26, r: 84.0, estimated: false }  # 추론
  coding: { s: 94.0, z: 1.87, r: 78.0, estimated: false }  # 코딩
  agentic: { s: 81.7, z: 1.76, r: 76.4, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.05, r: 65.8, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.11, r: 66.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **56.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 63.0 t/s · TTFT 4.56s · 1M ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.9 | +2.26 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 84.0 | +2.26 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 78.0 | +1.87 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 76.4 | +1.76 | 실측 | [[gdpval]] 53.0%×1.0, [[tau2-bench]] 81.0%×1.0, [[tau3-banking]] 36.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 65.8 | +1.05 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 66.6 | +1.11 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
