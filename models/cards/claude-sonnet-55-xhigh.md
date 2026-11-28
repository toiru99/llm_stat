---
type: Model
title: Claude Sonnet 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 49.8735277282191
price_blended_usd_1m: 1.47
output_speed_tps: 148.966375730022
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.8, z: 0.98, r: 64.6, estimated: false }  # 전문 지식
  reasoning: { s: 77.0, z: 2.08, r: 81.2, estimated: false }  # 추론
  coding: { s: 82.9, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 94.5, z: 1.67, r: 75.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Sonnet 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.8735277282191**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 148.966375730022 t/s · TTFT 38.456317802412s · 1M ctx` · 가성비 33.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.6 | +0.98 | 실측 | [[humanitys-last-exam]] 50%×0.3 |
| 추론 | 81.2 | +2.08 | 실측 | [[critpt]] 31.1429%×1.0, [[humanitys-last-exam]] 50%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[scicode]] 57.2917%×1.0 |
| 에이전트 | 75.0 | +1.67 | 실측 | [[gdpval]] 1742.23 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.8 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
