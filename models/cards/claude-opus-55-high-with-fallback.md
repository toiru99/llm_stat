---
type: Model
title: Claude Opus 5.5 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 52.0
price_blended_usd_1m: 2.94
output_speed_tps: 80.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.7, z: 1.86, r: 78.0, estimated: false }  # 전문 지식
  reasoning: { s: 86.1, z: 1.83, r: 77.4, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.72, r: 75.8, estimated: false }  # 코딩
  agentic: { s: 91.8, z: 1.98, r: 79.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.25, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Opus 5.5 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **52.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 80.0 t/s · TTFT 34.52s · 1M ctx` · 가성비 17.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.0 | +1.86 | 실측 | [[humanitys-last-exam]] 56.0%×0.3 |
| 추론 | 77.4 | +1.83 | 실측 | [[critpt]] 58.0%×1.0, [[humanitys-last-exam]] 56.0%×1.0 |
| 코딩 | 75.8 | +1.72 | 실측 | [[scicode]] 60.0%×1.0 |
| 에이전트 | 79.7 | +1.98 | 실측 | [[gdpval]] 1714.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.8 | +1.25 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
