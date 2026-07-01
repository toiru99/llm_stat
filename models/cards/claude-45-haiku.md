---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.77
output_speed_tps: 104.0
context_window: 200000
radar:
  knowledge: { s: 34.6, z: -0.82, r: 37.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.82, r: 37.6, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.06, r: 50.9, estimated: false }  # 코딩
  agentic: { s: 39.7, z: -0.47, r: 42.9, estimated: false }  # 에이전트
  trust: { s: 87.5, z: 1.77, r: 76.5, estimated: false }  # 신뢰성
  multimodal: { s: 56.9, z: -1.0, r: 34.9, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.84, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · 컨텍스트 200k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 104.0 t/s · TTFT 21.66s · 200k ctx` · 가성비 39.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.8 | -0.82 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 37.6 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 50.9 | +0.06 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 42.9 | -0.47 | 실측 | [[gdpval]] 20.0%×1.0, [[itbench]] 27.0%×1.0, [[tau2-bench]] 55.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 76.5 | +1.77 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 34.9 | -1.0 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 62.7 | +0.84 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
