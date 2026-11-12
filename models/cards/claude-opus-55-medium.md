---
type: Model
title: Claude Opus 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 48.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.27, r: 69.1, estimated: false }  # 전문 지식
  reasoning: { s: 71.9, z: 1.41, r: 71.2, estimated: false }  # 추론
  coding: { s: 86.2, z: 1.63, r: 74.4, estimated: false }  # 코딩
  agentic: { s: 85.4, z: 1.71, r: 75.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.24, r: 68.6, estimated: false }  # 멀티모달
  long_context: { s: 95.0, z: 1.26, r: 68.9, estimated: false }  # 긴문맥
  instruction: { s: 82.2, z: 1.27, r: 69.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Claude Opus 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **48.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 16.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.1 | +1.27 | 실측 | [[humanitys-last-exam]] 54.7%×0.3 |
| 추론 | 71.2 | +1.41 | 실측 | [[critpt]] 54.0%×1.0, [[humanitys-last-exam]] 54.7%×1.0 |
| 코딩 | 74.4 | +1.63 | 실측 | [[scicode]] 59.3%×1.0 |
| 에이전트 | 75.7 | +1.71 | 실측 | [[gdpval]] 1593.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.6 | +1.24 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.9 | +1.26 | 실측 | [[aa-lcr]] 84.3%×1.0 |
| 지시 따르기 | 69.0 | +1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
