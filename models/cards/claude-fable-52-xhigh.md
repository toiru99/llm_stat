---
type: Model
title: Claude Fable 5.2 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 62.2167392403357
price_blended_usd_1m: 5.74
output_speed_tps: 111.689853797353
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 92.6, z: 2.23, r: 83.4, estimated: false }  # 전문 지식
  reasoning: { s: 96.3, z: 3.04, r: 95.6, estimated: false }  # 추론
  coding: { s: 96.6, z: 1.87, r: 78.1, estimated: false }  # 코딩
  agentic: { s: 95.0, z: 1.69, r: 75.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude Fable 5.2 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **62.2167392403357**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $8.0 · 출력 $40.0 · 혼합 $5.74/1M · 111.689853797353 t/s · TTFT 76.492962780307s · 1M ctx` · 가성비 10.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 83.4 | +2.23 | 실측 | [[humanitys-last-exam]] 68.8601%×0.3 |
| 추론 | 95.6 | +3.04 | 실측 | [[critpt]] 35.7143%×1.0, [[humanitys-last-exam]] 68.8601%×1.0 |
| 코딩 | 78.1 | +1.87 | 실측 | [[scicode]] 65.625%×1.0 |
| 에이전트 | 75.3 | +1.69 | 실측 | [[gdpval]] 1752.56 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 82.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
