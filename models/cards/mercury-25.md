---
type: Model
title: Mercury 2.5
creator: Inception
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.129
output_speed_tps: 521.592039031683
context_window: 260000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 14.6, z: -1.56, r: 26.6, estimated: false }  # 전문 지식
  reasoning: { s: 7.3, z: -1.38, r: 29.2, estimated: false }  # 추론
  coding: { s: 52.0, z: 0.37, r: 55.5, estimated: false }  # 코딩
  agentic: { s: 39.0, z: -0.29, r: 45.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.8, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Mercury 2.5

Inception · Proprietary · Unknown · 컨텍스트 260k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.2 · 출력 $0.75 · 혼합 $0.129/1M · 521.592039031683 t/s · TTFT 2.19478122377187s · 260k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 26.6 | -1.56 | 실측 | [[humanitys-last-exam]] 11.7702%×0.3 |
| 추론 | 29.2 | -1.38 | 실측 | [[critpt]] 0%×1.0, [[humanitys-last-exam]] 11.7702%×1.0 |
| 코딩 | 55.5 | +0.37 | 실측 | [[scicode]] 38.5417%×1.0 |
| 에이전트 | 45.7 | -0.29 | 실측 | [[gdpval]] 481.63 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 71.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
