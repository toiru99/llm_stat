---
type: Model
title: Claude Sonnet 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 2.31
output_speed_tps: 78.0
context_window: 1000000
radar:
  knowledge: { s: 72.2, z: 0.93, r: 63.9, estimated: false }  # 전문 지식
  reasoning: { s: 75.4, z: 1.44, r: 71.6, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.3, r: 69.6, estimated: false }  # 코딩
  agentic: { s: 87.7, z: 1.44, r: 71.6, estimated: false }  # 에이전트
  trust: { s: 73.8, z: 1.29, r: 69.4, estimated: false }  # 신뢰성
  multimodal: { s: 87.9, z: 0.62, r: 59.4, estimated: false }  # 멀티모달
  long_context: { s: 95.9, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.13, r: 51.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude Sonnet 5 (max)

Anthropic · Proprietary · 컨텍스트 1M · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 78.0 t/s · TTFT 163.17s · 1M ctx` · 가성비 22.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.9 | +0.93 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 71.6 | +1.44 | 실측 | [[critpt]] 17.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 69.6 | +1.3 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 71.6 | +1.44 | 실측 | [[gdpval]] 55.0%×1.0, [[tau3-banking]] 28.0%×1.0 |
| 신뢰성 | 69.4 | +1.29 | 실측 | [[aa-omniscience]] 63.0%×1.0 |
| 멀티모달 | 59.4 | +0.62 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 51.9 | +0.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
