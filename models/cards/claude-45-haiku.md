---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 0.77
output_speed_tps: 91.0
context_window: 200000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 34.0, z: -0.38, r: 44.2, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 52.5, z: 0.57, r: 58.6, estimated: false }  # 코딩
  agentic: { s: 35.6, z: -0.11, r: 48.4, estimated: false }  # 에이전트
  trust: { s: 73.2, z: 2.2, r: 82.9, estimated: false }  # 신뢰성
  multimodal: { s: 60.3, z: -0.53, r: 42.0, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: 0.22, r: 53.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **17.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 91.0 t/s · TTFT 15.98s · 200k ctx` · 가성비 22.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.2 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 58.6 | +0.57 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 48.4 | -0.11 | 실측 | [[gdpval]] 11.0%×1.0, [[itbench]] 27.0%×1.0, [[tau2-bench]] 55.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 82.9 | +2.2 | 실측 | [[aa-omniscience]] 73.0%×1.0 |
| 멀티모달 | 42.0 | -0.53 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 53.3 | +0.22 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
