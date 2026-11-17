---
type: Model
title: Muse Wonder (high)
creator: Meta
license: Proprietary
intelligence_index: 40.5266079185604
price_blended_usd_1m: 2.94
output_speed_tps: 122.7755174500927
context_window: 1048576
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.2, z: 0.92, r: 63.8, estimated: true }  # 전문 지식
  reasoning: { s: 55.7, z: 1.01, r: 65.1, estimated: true }  # 추론
  coding: { s: 65.3, z: 0.87, r: 63.0, estimated: true }  # 코딩
  agentic: { s: 62.9, z: 0.63, r: 59.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.7, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 87.4, z: 1.01, r: 65.2, estimated: true }  # 긴문맥
  instruction: { s: 84.6, z: 1.29, r: 69.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Muse Wonder (high)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **40.5266079185604**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 멀티모달
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 122.7755174500927 t/s · TTFT 12.181518206433346s · 1M ctx` · 가성비 13.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.8 | +0.92 | 추정 | (추정) |
| 추론 | 65.1 | +1.01 | 추정 | (추정) |
| 코딩 | 63.0 | +0.87 | 추정 | (추정) |
| 에이전트 | 59.5 | +0.63 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 83.8150289017341%×1.0 |
| 긴문맥 | 65.2 | +1.01 | 추정 | (추정) |
| 지시 따르기 | 69.4 | +1.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
