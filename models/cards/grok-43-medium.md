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
  knowledge: { s: 57.1, z: 0.75, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 54.1, z: 0.92, r: 63.8, estimated: false }  # 추론
  coding: { s: 65.2, z: 0.69, r: 60.4, estimated: false }  # 코딩
  agentic: { s: 68.7, z: 1.26, r: 69.0, estimated: false }  # 에이전트
  trust: { s: 94.2, z: 2.97, r: 94.5, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.71, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 81.9, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.86, r: 77.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# Grok 4.3 (medium)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 117.0 t/s · TTFT 13.47s · 1M ctx` · 가성비 57.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.75 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 63.8 | +0.92 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 60.4 | +0.69 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 30.0%×0.5 |
| 에이전트 | 69.0 | +1.26 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 30.0%×1.0 |
| 신뢰성 | 94.5 | +2.97 | 실측 | [[aa-omniscience]] 83.0%×1.0 |
| 멀티모달 | 60.7 | +0.71 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 68.0%×1.0 |
| 지시 따르기 | 77.9 | +1.86 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
