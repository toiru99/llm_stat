---
type: Model
title: Claude Haiku 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 34.5882708981578
price_blended_usd_1m: 0.077
output_speed_tps: 235.222858577026
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 56.8, z: 0.49, r: 57.3, estimated: false }  # 전문 지식
  reasoning: { s: 60.0, z: 1.24, r: 68.5, estimated: false }  # 추론
  coding: { s: 73.7, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 84.9, z: 1.33, r: 70.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.3, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Haiku 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Claude Haiku 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **34.5882708981578**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.1 · 출력 $0.5 · 혼합 $0.077/1M · 235.222858577026 t/s · TTFT 44.3776229702559s · 1M ctx` · 가성비 449.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 57.3 | +0.49 | 실측 | [[humanitys-last-exam]] 42.6784%×0.3 |
| 추론 | 68.5 | +1.24 | 실측 | [[critpt]] 22.5714%×1.0, [[humanitys-last-exam]] 42.6784%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 51.7361%×1.0 |
| 에이전트 | 70.0 | +1.33 | 실측 | [[gdpval]] 1523.13 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 78.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
