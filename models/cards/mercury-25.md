---
type: Model
title: Mercury 2.5
creator: Inception
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.129
output_speed_tps: 536.916320731701
context_window: 260000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 14.6, z: -1.58, r: 26.3, estimated: false }  # 전문 지식
  reasoning: { s: 7.3, z: -1.4, r: 29.1, estimated: false }  # 추론
  coding: { s: 52.0, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 39.0, z: -0.21, r: 46.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.81, r: 62.1, estimated: false }  # 긴문맥
  instruction: { s: 44.9, z: -0.37, r: 44.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Mercury 2.5

Inception · Proprietary · Unknown · 컨텍스트 260k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.2 · 출력 $0.75 · 혼합 $0.129/1M · 536.916320731701 t/s · TTFT 2.11045487913285s · 260k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.3 | -1.58 | 실측 | [[humanitys-last-exam]] 11.770157553290101%×0.3 |
| 추론 | 29.1 | -1.4 | 실측 | [[critpt]] 0.0%×1.0, [[humanitys-last-exam]] 11.770157553290101%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 38.5416666666667%×1.0 |
| 에이전트 | 46.9 | -0.21 | 실측 | [[gdpval]] 481.63%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.1 | +0.81 | 실측 | [[aa-lcr]] 71.6666666666667%×1.0 |
| 지시 따르기 | 44.4 | -0.37 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
