---
type: Model
title: Grok 4.3 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 0.64
output_speed_tps: 121.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 57.8, z: 0.77, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 53.9, z: 0.96, r: 64.3, estimated: false }  # 추론
  coding: { s: 65.2, z: 0.74, r: 61.1, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 1.32, r: 69.7, estimated: false }  # 에이전트
  trust: { s: 95.4, z: 3.05, r: 95.8, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.74, r: 61.1, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.93, r: 78.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Grok 4.3 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 121.0 t/s · TTFT 11.65s · 1M ctx` · 가성비 56.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.77 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 64.3 | +0.96 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 61.1 | +0.74 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 69.7 | +1.32 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 95.8 | +3.05 | 실측 | [[aa-omniscience]] 84.0%×1.0 |
| 멀티모달 | 61.1 | +0.74 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 78.9 | +1.93 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
