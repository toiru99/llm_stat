---
type: Model
title: MiniMax-M3.1-Flash
creator: MiniMax
license: Open
intelligence_index: 29.0595214290458
price_blended_usd_1m: 0.1005
output_speed_tps: 145.27877930595926
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.1, z: 0.82, r: 62.3, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.38, r: 70.7, estimated: false }  # 추론
  coding: { s: 76.4, z: 1.25, r: 68.7, estimated: false }  # 코딩
  agentic: { s: 82.3, z: 1.31, r: 69.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.78, r: 61.7, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 68.6, z: 0.62, r: 59.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3.1-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# MiniMax-M3.1-Flash

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **29.0595214290458**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 145.27877930595926 t/s · TTFT 1.2706997703865819s · 1M ctx` · 가성비 289.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.3 | +0.82 | 실측 | [[humanitys-last-exam]] 47.9610750695088%×0.3 |
| 추론 | 70.7 | +1.38 | 실측 | [[critpt]] 22.2857142857143%×1.0, [[humanitys-last-exam]] 47.9610750695088%×1.0 |
| 코딩 | 68.7 | +1.25 | 실측 | [[scicode]] 53.3564814814815%×1.0 |
| 에이전트 | 69.6 | +1.31 | 실측 | [[gdpval]] 1465.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.7 | +0.78 | 실측 | [[mmmu-pro]] 79.1329479768786%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 79.6666666666667%×1.0 |
| 지시 따르기 | 59.4 | +0.62 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
