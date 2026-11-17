---
type: Model
title: Claude Opus 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 59.1060336078904
price_blended_usd_1m: 2.94
output_speed_tps: 117.45626107879896
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.3, z: 1.71, r: 75.6, estimated: false }  # 전문 지식
  reasoning: { s: 85.6, z: 2.49, r: 87.3, estimated: false }  # 추론
  coding: { s: 98.7, z: 2.01, r: 80.1, estimated: false }  # 코딩
  agentic: { s: 100.0, z: 1.92, r: 78.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.9, z: 1.36, r: 70.4, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.25, r: 68.8, estimated: false }  # 긴문맥
  instruction: { s: 81.2, z: 1.15, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Opus 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **59.1060336078904**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 117.45626107879896 t/s · TTFT 356.2381303301886s · 1M ctx` · 가성비 20.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 75.6 | +1.71 | 실측 | [[humanitys-last-exam]] 61.353104726598694%×0.3 |
| 추론 | 87.3 | +2.49 | 실측 | [[critpt]] 31.7142857142857%×1.0, [[humanitys-last-exam]] 61.353104726598694%×1.0 |
| 코딩 | 80.1 | +2.01 | 실측 | [[scicode]] 66.8981481481482%×1.0 |
| 에이전트 | 78.8 | +1.92 | 실측 | [[gdpval]] 1866.27%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 70.4 | +1.36 | 실측 | [[mmmu-pro]] 87.6878612716763%×1.0 |
| 긴문맥 | 68.8 | +1.25 | 실측 | [[aa-lcr]] 84.6666666666667%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
