---
type: Model
title: Claude Haiku 5.5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: 24.6013254343023
price_blended_usd_1m: 0.077
output_speed_tps: 224.2419344549559
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.7, z: -0.12, r: 48.2, estimated: false }  # 전문 지식
  reasoning: { s: 40.3, z: 0.25, r: 53.7, estimated: false }  # 추론
  coding: { s: 69.1, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 74.3, z: 1.03, r: 65.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 60.5, z: 0.29, r: 54.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Haiku 5.5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.6013254343023**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 224.2419344549559 t/s · TTFT 9.55377698547893s · 1M ctx` · 가성비 319.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.2 | -0.12 | 실측 | [[humanitys-last-exam]] 33.7812789620019%×0.3 |
| 추론 | 53.7 | +0.25 | 실측 | [[critpt]] 12.8571428571429%×1.0, [[humanitys-last-exam]] 33.7812789620019%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 48.9583333333333%×1.0 |
| 에이전트 | 65.4 | +1.03 | 실측 | [[gdpval]] 1282.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 77.3333333333333%×1.0 |
| 지시 따르기 | 54.3 | +0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
