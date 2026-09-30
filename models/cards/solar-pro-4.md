---
type: Model
title: Solar Pro 4
creator: Upstage
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 0.222
output_speed_tps: 80.0
context_window: 512000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.5, z: 0.2, r: 52.9, estimated: false }  # 전문 지식
  reasoning: { s: 51.4, z: 0.69, r: 60.4, estimated: false }  # 추론
  coding: { s: 63.3, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 45.1, z: 0.26, r: 53.9, estimated: false }  # 에이전트
  trust: { s: 76.3, z: 2.34, r: 85.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.97, r: 64.5, estimated: false }  # 긴문맥
  instruction: { s: 90.7, z: 1.52, r: 72.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Solar Pro 4

Upstage · Proprietary · Unknown · 컨텍스트 512k · 종합지능 **28.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 80.0 t/s · TTFT 2.06s · 512k ctx` · 가성비 126.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.9 | +0.2 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 29.0%×0.3 |
| 추론 | 60.4 | +0.69 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 29.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[scicode]] 45.0%×1.0 |
| 에이전트 | 53.9 | +0.26 | 실측 | [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | 85.1 | +2.34 | 실측 | [[aa-omniscience]] 76.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.5 | +0.97 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 72.9 | +1.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
