---
type: Model
title: Solar Pro 4
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.222
output_speed_tps: 103.0
context_window: 512000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.04, r: 65.7, estimated: false }  # 전문 지식
  reasoning: { s: 70.1, z: 1.1, r: 66.4, estimated: false }  # 추론
  coding: { s: 68.3, z: 1.04, r: 65.6, estimated: false }  # 코딩
  agentic: { s: 52.2, z: 0.62, r: 59.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.82, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 82.0, z: 1.23, r: 68.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Solar Pro 4

Upstage · Proprietary · Unknown · 컨텍스트 512k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 103.0 t/s · TTFT 2.39s · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.7 | +1.04 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 66.4 | +1.1 | 실측 | [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 65.6 | +1.04 | 실측 | [[scicode]] 48.0%×1.0 |
| 에이전트 | 59.2 | +0.62 | 실측 | [[gdpval]] 1106.0%×1.0, [[tau3-banking]] 23.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.4 | +0.82 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
