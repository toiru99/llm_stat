---
type: Model
title: Claude Opus 5.5 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 51.7854907722244
price_blended_usd_1m: 2.94
output_speed_tps: 110.837735868229
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.4, z: 1.34, r: 70.2, estimated: false }  # 전문 지식
  reasoning: { s: 80.4, z: 2.25, r: 83.7, estimated: false }  # 추론
  coding: { s: 88.0, z: 1.58, r: 73.7, estimated: false }  # 코딩
  agentic: { s: 93.1, z: 1.62, r: 74.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.1, z: 1.21, r: 68.2, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Opus 5.5 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.7854907722244**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 110.837735868229 t/s · TTFT 25.0804241819764s · 1M ctx` · 가성비 17.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.2 | +1.34 | 실측 | [[humanitys-last-exam]] 55.5607%×0.3 |
| 추론 | 83.7 | +2.25 | 실측 | [[critpt]] 30.8571%×1.0, [[humanitys-last-exam]] 55.5607%×1.0 |
| 코딩 | 73.7 | +1.58 | 실측 | [[scicode]] 60.4167%×1.0 |
| 에이전트 | 74.2 | +1.62 | 실측 | [[gdpval]] 1708.61 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.2 | +1.21 | 실측 | [[mmmu-pro]] 85.8382%×1.0 |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 82.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
