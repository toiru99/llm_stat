---
type: Model
title: Muse Wonder Full (max)
creator: Meta
license: Proprietary
intelligence_index: 49.9256972111869
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.8, z: 1.22, r: 68.2, estimated: false }  # 전문 지식
  reasoning: { s: 81.9, z: 2.32, r: 84.8, estimated: false }  # 추론
  coding: { s: 91.6, z: 1.71, r: 75.6, estimated: false }  # 코딩
  agentic: { s: 99.6, z: 1.85, r: 77.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.12, r: 66.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Wonder Full (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Muse Wonder Full (max)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.9256972111869**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 68.2 | +1.22 | 실측 | [[humanitys-last-exam]] 53.6145%×0.3 |
| 추론 | 84.8 | +2.32 | 실측 | [[critpt]] 32.8571%×1.0, [[humanitys-last-exam]] 53.6145%×1.0 |
| 코딩 | 75.6 | +1.71 | 실측 | [[scicode]] 62.6157%×1.0 |
| 에이전트 | 77.8 | +1.85 | 실측 | [[gdpval]] 1857.09 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.8 | +1.12 | 실측 | [[aa-lcr]] 83.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
