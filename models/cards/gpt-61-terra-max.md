---
type: Model
title: GPT-6.1 Terra (max)
creator: OpenAI
license: Proprietary
intelligence_index: 51.3265188577015
price_blended_usd_1m: 0.735
output_speed_tps: 68.63984445872323
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.7, z: 0.69, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 70.1, z: 1.7, r: 75.5, estimated: false }  # 추론
  coding: { s: 79.2, z: 1.33, r: 70.0, estimated: false }  # 코딩
  agentic: { s: 82.8, z: 1.31, r: 69.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.6, z: 1.13, r: 67.0, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.18, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 72.7, z: 0.79, r: 61.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Terra (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-6.1 Terra (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.3265188577015**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.735/1M · 68.63984445872323 t/s · TTFT 146.485977170229s · 1M ctx` · 가성비 69.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 실측 | [[humanitys-last-exam]] 46.246524559777605%×0.3 |
| 추론 | 75.5 | +1.7 | 실측 | [[critpt]] 28.000000000000004%×1.0, [[humanitys-last-exam]] 46.246524559777605%×1.0 |
| 코딩 | 70.0 | +1.33 | 실측 | [[scicode]] 55.0925925925926%×1.0 |
| 에이전트 | 69.7 | +1.31 | 실측 | [[gdpval]] 1475.84%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.0 | +1.13 | 실측 | [[mmmu-pro]] 84.6820809248555%×1.0 |
| 긴문맥 | 67.6 | +1.18 | 실측 | [[aa-lcr]] 82.6666666666667%×1.0 |
| 지시 따르기 | 61.8 | +0.79 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
