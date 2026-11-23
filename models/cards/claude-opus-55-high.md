---
type: Model
title: Claude Opus 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 51.8359958227294
price_blended_usd_1m: 2.94
output_speed_tps: 107.775539872592
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.4, z: 1.31, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 80.4, z: 2.21, r: 83.2, estimated: false }  # 추론
  coding: { s: 88.0, z: 1.63, r: 74.4, estimated: false }  # 코딩
  agentic: { s: 93.1, z: 1.66, r: 75.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.1, z: 1.21, r: 68.2, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 81.5, z: 1.16, r: 67.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Claude Opus 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.8359958227294**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 107.775539872592 t/s · TTFT 22.5217365902407s · 1M ctx` · 가성비 17.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.31 | 실측 | [[humanitys-last-exam]] 55.56070435588511%×0.3 |
| 추론 | 83.2 | +2.21 | 실측 | [[critpt]] 30.8571428571429%×1.0, [[humanitys-last-exam]] 55.56070435588511%×1.0 |
| 코딩 | 74.4 | +1.63 | 실측 | [[scicode]] 60.4166666666667%×1.0 |
| 에이전트 | 75.0 | +1.66 | 실측 | [[gdpval]] 1708.61%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.2 | +1.21 | 실측 | [[mmmu-pro]] 85.8381502890173%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 82.6666666666667%×1.0 |
| 지시 따르기 | 67.3 | +1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
