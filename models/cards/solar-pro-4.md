---
type: Model
title: Solar Pro 4
creator: Upstage
license: Proprietary
intelligence_index: 14.1589437644357
price_blended_usd_1m: 0.222
output_speed_tps: 92.1347238925546
context_window: 512000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.2, z: 1.09, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 49.5, z: 0.71, r: 60.7, estimated: false }  # 추론
  coding: { s: 67.6, z: 0.9, r: 63.4, estimated: false }  # 코딩
  agentic: { s: 55.8, z: 0.3, r: 54.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.67, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Solar Pro 4

Upstage · Proprietary · Unknown · 컨텍스트 512k · 종합지능 **14.1589437644357**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 92.1347238925546 t/s · TTFT 2.36812871988512s · 512k ctx` · 가성비 63.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 실측 | [[gpqa-diamond]] 89.0909%×0.4, [[humanitys-last-exam]] 29.8424%×0.3 |
| 추론 | 60.7 | +0.71 | 실측 | [[critpt]] 6.28571%×1.0, [[gpqa-diamond]] 89.0909%×1.0, [[humanitys-last-exam]] 29.8424%×1.0 |
| 코딩 | 63.4 | +0.9 | 실측 | [[scicode]] 48.0324%×1.0 |
| 에이전트 | 54.6 | +0.3 | 실측 | [[gdpval]] 1105.73 Elo×1.0, [[tau3-banking]] 23.299%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.1 | +0.67 | 실측 | [[aa-lcr]] 70.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
