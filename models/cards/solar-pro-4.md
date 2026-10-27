---
type: Model
title: Solar Pro 4
creator: Upstage
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 0.222
output_speed_tps: None
context_window: 512000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.8, z: 0.17, r: 52.5, estimated: false }  # 전문 지식
  reasoning: { s: 52.8, z: 0.7, r: 60.6, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.03, r: 65.4, estimated: false }  # 코딩
  agentic: { s: 52.1, z: 0.6, r: 59.0, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.22, r: 83.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 91.3, z: 1.57, r: 73.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Solar Pro 4

Upstage · Proprietary · Unknown · 컨텍스트 512k · 종합지능 **27.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · None t/s · TTFT Nones · 512k ctx` · 가성비 121.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.5 | +0.17 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 60.6 | +0.7 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 65.4 | +1.03 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 59.0 | +0.6 | 실측 | [[gdpval]] 1106.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | 83.3 | +2.22 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 73.6 | +1.57 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
