---
type: Model
title: Claude Opus 5.5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 57.4447060170507
price_blended_usd_1m: 2.94
output_speed_tps: 108.86059761134852
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.1, z: 1.44, r: 71.5, estimated: false }  # 전문 지식
  reasoning: { s: 82.9, z: 2.34, r: 85.0, estimated: false }  # 추론
  coding: { s: 95.6, z: 1.89, r: 78.3, estimated: false }  # 코딩
  agentic: { s: 98.7, z: 1.86, r: 77.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 96.1, z: 1.26, r: 69.0, estimated: false }  # 멀티모달
  long_context: { s: 95.5, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 82.5, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Claude Opus 5.5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **57.4447060170507**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 108.86059761134852 t/s · TTFT 62.47769207757673s · 1M ctx` · 가성비 19.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.5 | +1.44 | 실측 | [[humanitys-last-exam]] 57.5069508804449%×0.3 |
| 추론 | 85.0 | +2.34 | 실측 | [[critpt]] 31.7142857142857%×1.0, [[humanitys-last-exam]] 57.5069508804449%×1.0 |
| 코딩 | 78.3 | +1.89 | 실측 | [[scicode]] 65.0462962962963%×1.0 |
| 에이전트 | 77.9 | +1.86 | 실측 | [[gdpval]] 1835.85%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 69.0 | +1.26 | 실측 | [[mmmu-pro]] 86.5895953757225%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 84.6666666666667%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
