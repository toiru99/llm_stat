---
type: Model
title: Claude Opus 5.5 (max with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 58.0
price_blended_usd_1m: 2.94
output_speed_tps: 97.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 100.0, z: 2.23, r: 83.5, estimated: false }  # 전문 지식
  reasoning: { s: 92.4, z: 2.11, r: 81.6, estimated: false }  # 추론
  coding: { s: 100.0, z: 2.11, r: 81.6, estimated: false }  # 코딩
  agentic: { s: 83.6, z: 1.7, r: 75.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 100.0, z: 1.39, r: 70.9, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.3, r: 69.5, estimated: false }  # 긴문맥
  instruction: { s: 82.3, z: 1.24, r: 68.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (max with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Opus 5.5 (max with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **58.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 97.0 t/s · TTFT 729.62s · 1M ctx` · 가성비 19.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.5 | +2.23 | 실측 | [[humanitys-last-exam]] 61.0%×0.3 |
| 추론 | 81.6 | +2.11 | 실측 | [[critpt]] 61.0%×1.0, [[humanitys-last-exam]] 61.0%×1.0 |
| 코딩 | 81.6 | +2.11 | 실측 | [[scicode]] 67.0%×1.0 |
| 에이전트 | 75.5 | +1.7 | 실측 | [[gdpval]] 1866.0%×1.0, [[itbench]] 38.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.9 | +1.39 | 실측 | [[mmmu-pro]] 88.0%×1.0 |
| 긴문맥 | 69.5 | +1.3 | 실측 | [[aa-lcr]] 85.0%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
