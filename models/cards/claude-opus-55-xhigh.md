---
type: Model
title: Claude Opus 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 57.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.0, z: 1.44, r: 71.6, estimated: false }  # 전문 지식
  reasoning: { s: 82.6, z: 1.92, r: 78.8, estimated: false }  # 추론
  coding: { s: 95.6, z: 1.93, r: 78.9, estimated: false }  # 코딩
  agentic: { s: 98.3, z: 2.14, r: 82.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.31, r: 69.6, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.27, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 82.1, z: 1.25, r: 68.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Claude Opus 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 19.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.6 | +1.44 | 실측 | [[humanitys-last-exam]] 57.5%×0.3 |
| 추론 | 78.8 | +1.92 | 실측 | [[critpt]] 67.5%×1.0, [[humanitys-last-exam]] 57.5%×1.0 |
| 코딩 | 78.9 | +1.93 | 실측 | [[scicode]] 65.0%×1.0 |
| 에이전트 | 82.1 | +2.14 | 실측 | [[gdpval]] 1835.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 69.6 | +1.31 | 실측 | [[mmmu-pro]] 87.0%×1.0 |
| 긴문맥 | 69.0 | +1.27 | 실측 | [[aa-lcr]] 84.7%×1.0 |
| 지시 따르기 | 68.7 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
