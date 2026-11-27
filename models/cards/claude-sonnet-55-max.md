---
type: Model
title: Claude Sonnet 5.5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 54.7282014953324
price_blended_usd_1m: 1.47
output_speed_tps: 153.622450863029
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.6, z: 1.3, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 80.8, z: 2.27, r: 84.0, estimated: false }  # 추론
  coding: { s: 89.0, z: 1.62, r: 74.2, estimated: false }  # 코딩
  agentic: { s: 98.7, z: 1.82, r: 77.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5.5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Claude Sonnet 5.5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.7282014953324**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 153.622450863029 t/s · TTFT 252.846763078797s · 1M ctx` · 가성비 37.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.3 | 실측 | [[humanitys-last-exam]] 54.9583%×0.3 |
| 추론 | 84.0 | +2.27 | 실측 | [[critpt]] 31.4286%×1.0, [[humanitys-last-exam]] 54.9583%×1.0 |
| 코딩 | 74.2 | +1.62 | 실측 | [[scicode]] 60.9954%×1.0 |
| 에이전트 | 77.2 | +1.82 | 실측 | [[gdpval]] 1837.82 Elo×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 82.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
