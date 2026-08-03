---
type: Model
title: o3-pro
creator: OpenAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.3, z: 2.26, r: 83.9, estimated: false }  # 전문 지식
  reasoning: { s: 89.3, z: 2.75, r: 91.3, estimated: false }  # 추론
  coding: { s: 91.6, z: 1.86, r: 77.9, estimated: true }  # 코딩
  agentic: { s: 88.3, z: 2.01, r: 80.2, estimated: true }  # 에이전트
  trust: { s: 18.4, z: -0.46, r: 43.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.7, z: 1.34, r: 70.1, estimated: true }  # 긴문맥
  instruction: { s: 84.2, z: 1.28, r: 69.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# o3-pro

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $20.0 · 출력 $80.0 · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.9 | +2.26 | 실측 | [[gpqa-diamond]] 85.0%×0.4 |
| 추론 | 91.3 | +2.75 | 실측 | [[gpqa-diamond]] 85.0%×1.0 |
| 코딩 | 77.9 | +1.86 | 추정 | (추정) |
| 에이전트 | 80.2 | +2.01 | 추정 | (추정) |
| 신뢰성 | 43.1 | -0.46 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.1 | +1.34 | 추정 | (추정) |
| 지시 따르기 | 69.3 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
