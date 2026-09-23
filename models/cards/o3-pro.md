---
type: Model
title: o3-pro
creator: OpenAI
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 26
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 87.2, z: 2.15, r: 82.3, estimated: false }  # 전문 지식
  reasoning: { s: 87.2, z: 2.41, r: 86.2, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.61, r: 74.2, estimated: true }  # 코딩
  agentic: { s: 77.1, z: 1.5, r: 72.6, estimated: true }  # 에이전트
  trust: { s: 23.9, z: -0.08, r: 48.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.1, z: 1.29, r: 69.3, estimated: true }  # 긴문맥
  instruction: { s: 80.0, z: 1.09, r: 66.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# o3-pro

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $20.0 · 출력 $80.0 · 혼합 $26/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 0.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.3 | +2.15 | 실측 | [[gpqa-diamond]] 85.0%×0.4 |
| 추론 | 86.2 | +2.41 | 실측 | [[gpqa-diamond]] 85.0%×1.0 |
| 코딩 | 74.2 | +1.61 | 추정 | (추정) |
| 에이전트 | 72.6 | +1.5 | 추정 | (추정) |
| 신뢰성 | 48.8 | -0.08 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.3 | +1.29 | 추정 | (추정) |
| 지시 따르기 | 66.4 | +1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
