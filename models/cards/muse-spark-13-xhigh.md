---
type: Model
title: Muse Spark 1.3 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.78
output_speed_tps: 259.87127380679
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.9, z: 1.76, r: 76.3, estimated: false }  # 전문 지식
  reasoning: { s: 77.9, z: 2.12, r: 81.9, estimated: false }  # 추론
  coding: { s: 86.9, z: 1.54, r: 73.2, estimated: false }  # 코딩
  agentic: { s: 90.8, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.1, z: 0.95, r: 64.3, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.3 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Muse Spark 1.3 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 259.87127380679 t/s · TTFT 10.1108424116055s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 76.3 | +1.76 | 실측 | [[gpqa-diamond]] 94.1414%×0.4, [[humanitys-last-exam]] 47.4513%×0.3 |
| 추론 | 81.9 | +2.12 | 실측 | [[critpt]] 26%×1.0, [[gpqa-diamond]] 94.1414%×1.0, [[humanitys-last-exam]] 47.4513%×1.0 |
| 코딩 | 73.2 | +1.54 | 실측 | [[scicode]] 59.7222%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 1630.9 Elo×1.0, [[tau3-banking]] 47.2165%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.3 | +0.95 | 실측 | [[mmmu-pro]] 82.0231%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
