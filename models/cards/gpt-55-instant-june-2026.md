---
type: Model
title: GPT-5.5 Instant (June 2026)
creator: OpenAI
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 4.35
output_speed_tps: None
context_window: 400000
radar:
  knowledge: { s: 68.4, z: 0.75, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: -0.25, r: 46.2, estimated: false }  # 추론
  coding: { s: 81.7, z: 0.93, r: 64.0, estimated: false }  # 코딩
  agentic: { s: 20.7, z: -1.2, r: 31.9, estimated: false }  # 에이전트
  trust: { s: 28.7, z: -0.23, r: 46.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.55, r: 58.3, estimated: false }  # 긴문맥
  instruction: { s: 75.4, z: 0.29, r: 54.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 Instant (June 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# GPT-5.5 Instant (June 2026)

OpenAI · Proprietary · 컨텍스트 400k · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · None t/s · TTFT Nones · 400k ctx` · 가성비 6.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.75 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 82.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 46.2 | -0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 64.0 | +0.93 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 31.9 | -1.2 | 실측 | [[gdpval]] 11.0%×1.0, [[tau3-banking]] 12.0%×1.0 |
| 신뢰성 | 46.6 | -0.23 | 실측 | [[aa-omniscience]] 27.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.3 | +0.55 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 54.4 | +0.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
