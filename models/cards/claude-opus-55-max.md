---
type: Model
title: Claude Opus 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 59.0
price_blended_usd_1m: 2.94
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.4, z: 1.7, r: 75.5, estimated: false }  # 전문 지식
  reasoning: { s: 85.6, z: 2.06, r: 81.0, estimated: false }  # 추론
  coding: { s: 98.7, z: 2.03, r: 80.5, estimated: false }  # 코딩
  agentic: { s: 83.8, z: 1.65, r: 74.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 98.6, z: 1.37, r: 70.6, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.27, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 80.2, z: 1.17, r: 67.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Claude Opus 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 20.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.5 | +1.7 | 실측 | [[humanitys-last-exam]] 61.4%×0.3 |
| 추론 | 81.0 | +2.06 | 실측 | [[critpt]] 68.0%×1.0, [[humanitys-last-exam]] 61.4%×1.0 |
| 코딩 | 80.5 | +2.03 | 실측 | [[scicode]] 66.9%×1.0 |
| 에이전트 | 74.8 | +1.65 | 실측 | [[gdpval]] 1866.0%×1.0, [[itbench]] 38.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.6 | +1.37 | 실측 | [[mmmu-pro]] 88.0%×1.0 |
| 긴문맥 | 69.0 | +1.27 | 실측 | [[aa-lcr]] 84.7%×1.0 |
| 지시 따르기 | 67.5 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
