---
type: Model
title: Grok 4.3 (medium)
creator: SpaceXAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 0.64
output_speed_tps: 117.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.2, z: 0.76, r: 61.5, estimated: false }  # 전문 지식
  reasoning: { s: 52.9, z: 0.89, r: 63.4, estimated: false }  # 추론
  coding: { s: 63.5, z: 0.69, r: 60.4, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 1.21, r: 68.2, estimated: false }  # 에이전트
  trust: { s: 83.5, z: 2.78, r: 91.7, estimated: false }  # 신뢰성
  multimodal: { s: 85.9, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.96, r: 79.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Grok 4.3 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 117.0 t/s · TTFT 9.19s · 1M ctx` · 가성비 57.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.5 | +0.76 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 63.4 | +0.89 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 60.4 | +0.69 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 68.2 | +1.21 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 91.7 | +2.78 | 실측 | [[aa-omniscience]] 83.0%×1.0 |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 79.5 | +1.96 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
