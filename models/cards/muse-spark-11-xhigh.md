---
type: Model
title: Muse Spark 1.1 (xhigh)
creator: Meta
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.78
output_speed_tps: 198.8329849954266
context_window: 1048576
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.3, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 65.5, z: 1.49, r: 72.4, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 66.5, z: 0.76, r: 61.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 82.8, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Muse Spark 1.1 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Muse Spark 1.1 (xhigh)

Meta · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $4.25 · 혼합 $0.78/1M · 198.8329849954266 t/s · TTFT 12.279646610372241s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 89.79797979797979%×0.4, [[humanitys-last-exam]] 46.2001853568119%×0.3 |
| 추론 | 72.4 | +1.49 | 실측 | [[critpt]] 15.1428571428571%×1.0, [[gpqa-diamond]] 89.79797979797979%×1.0, [[humanitys-last-exam]] 46.2001853568119%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 58.796296296296305%×1.0 |
| 에이전트 | 61.4 | +0.76 | 실측 | [[gdpval]] 1215.8%×1.0, [[tau3-banking]] 31.752577319587598%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 77.6666666666667%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
