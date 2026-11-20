---
type: Model
title: Claude Sonnet 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 41.515109087048
price_blended_usd_1m: 1.47
output_speed_tps: 136.32060600156
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.1, z: 0.67, r: 60.0, estimated: false }  # 전문 지식
  reasoning: { s: 65.0, z: 1.45, r: 71.7, estimated: false }  # 추론
  coding: { s: 77.0, z: 1.25, r: 68.8, estimated: false }  # 코딩
  agentic: { s: 86.1, z: 1.43, r: 71.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.0, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 72.4, z: 0.78, r: 61.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Claude Sonnet 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **41.515109087048**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 136.32060600156 t/s · TTFT 10.3753420644294s · 1M ctx` · 가성비 28.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.0 | +0.67 | 실측 | [[humanitys-last-exam]] 45.8294717330862%×0.3 |
| 추론 | 71.7 | +1.45 | 실측 | [[critpt]] 24.571428571428598%×1.0, [[humanitys-last-exam]] 45.8294717330862%×1.0 |
| 코딩 | 68.8 | +1.25 | 실측 | [[scicode]] 53.703703703703695%×1.0 |
| 에이전트 | 71.4 | +1.43 | 실측 | [[gdpval]] 1551.33%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 61.7 | +0.78 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
