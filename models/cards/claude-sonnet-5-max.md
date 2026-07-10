---
type: Model
title: Claude Sonnet 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 1.54
output_speed_tps: 81.0
context_window: 1000000
radar:
  knowledge: { s: 72.2, z: 0.71, r: 60.6, estimated: false }  # 전문 지식
  reasoning: { s: 74.8, z: 1.16, r: 67.5, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.14, r: 67.1, estimated: false }  # 코딩
  agentic: { s: 86.1, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: 73.8, z: 1.48, r: 72.2, estimated: false }  # 신뢰성
  multimodal: { s: 87.9, z: 0.5, r: 57.4, estimated: false }  # 멀티모달
  long_context: { s: 95.9, z: 0.82, r: 62.3, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.08, r: 51.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Claude Sonnet 5 (max)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 81.0 t/s · TTFT 199.05s · 1M ctx` · 가성비 34.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.6 | +0.71 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 67.5 | +1.16 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 67.1 | +1.14 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[gdpval]] 55.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | 72.2 | +1.48 | 실측 | [[aa-omniscience]] 63.0%×1.0 |
| 멀티모달 | 57.4 | +0.5 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 62.3 | +0.82 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 51.2 | +0.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
