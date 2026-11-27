---
type: Model
title: Muse Spark 1.2 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.78
output_speed_tps: 187.480348227823
context_window: 1048576
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.58, r: 73.7, estimated: false }  # 전문 지식
  reasoning: { s: 67.8, z: 1.62, r: 74.3, estimated: false }  # 추론
  coding: { s: 83.0, z: 1.42, r: 71.2, estimated: false }  # 코딩
  agentic: { s: 75.3, z: 0.99, r: 64.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Muse Spark 1.2 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 187.480348227823 t/s · TTFT 10.7361736716056s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.7 | +1.58 | 실측 | [[gpqa-diamond]] 90.404%×0.4, [[humanitys-last-exam]] 45.4588%×0.3 |
| 추론 | 74.3 | +1.62 | 실측 | [[critpt]] 17.7143%×1.0, [[gpqa-diamond]] 90.404%×1.0, [[humanitys-last-exam]] 45.4588%×1.0 |
| 코딩 | 71.2 | +1.42 | 실측 | [[scicode]] 57.4074%×1.0 |
| 에이전트 | 64.9 | +0.99 | 실측 | [[gdpval]] 1477.65 Elo×1.0, [[tau3-banking]] 34.8454%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 79%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
