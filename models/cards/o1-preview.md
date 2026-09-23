---
type: Model
title: o1-preview
creator: OpenAI
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 15.675
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.7, z: 1.66, r: 74.8, estimated: false }  # 전문 지식
  reasoning: { s: 76.7, z: 1.92, r: 78.8, estimated: false }  # 추론
  coding: { s: 79.0, z: 1.52, r: 72.8, estimated: true }  # 코딩
  agentic: { s: 74.9, z: 1.42, r: 71.3, estimated: true }  # 에이전트
  trust: { s: 26.6, z: 0.04, r: 50.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.0, z: 1.17, r: 67.5, estimated: true }  # 긴문맥
  instruction: { s: 77.3, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o1-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# o1-preview

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $16.5 · 출력 $66.0 · 혼합 $15.675/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 0.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.8 | +1.66 | 실측 | [[gpqa-diamond]] 76.0%×0.4 |
| 추론 | 78.8 | +1.92 | 실측 | [[gpqa-diamond]] 76.0%×1.0 |
| 코딩 | 72.8 | +1.52 | 추정 | (추정) |
| 에이전트 | 71.3 | +1.42 | 추정 | (추정) |
| 신뢰성 | 50.6 | +0.04 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.5 | +1.17 | 추정 | (추정) |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
