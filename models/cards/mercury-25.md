---
type: Model
title: Mercury 2.5
creator: Inception
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 0.1425
output_speed_tps: 637.0
context_window: 260000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 30.6, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 9.2, z: -1.24, r: 31.4, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.6, r: 59.0, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.47, r: 27.9, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.36, r: 44.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 44.2, z: -0.4, r: 44.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Mercury 2.5

Inception · Proprietary · Unknown · 컨텍스트 260k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · 637.0 t/s · TTFT 3.6s · 260k ctx` · 가성비 84.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 31.4 | -1.24 | 실측 | [[critpt]] 0.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 59.0 | +0.6 | 실측 | [[scicode]] 39.0%×1.0 |
| 에이전트 | 27.9 | -1.47 | 실측 | [[gdpval]] 0.0%×1.0 |
| 신뢰성 | 44.6 | -0.36 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
