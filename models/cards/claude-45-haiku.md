---
type: Model
title: Claude 4.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: 30.0
price_blended_usd_1m: 0.77
output_speed_tps: 100.0
context_window: 200000
radar:
  knowledge: { s: 34.6, z: -0.8, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.07, r: 51.0, estimated: false }  # 코딩
  agentic: { s: 39.7, z: -0.45, r: 43.3, estimated: false }  # 에이전트
  trust: { s: 87.5, z: 1.76, r: 76.4, estimated: false }  # 신뢰성
  multimodal: { s: 56.9, z: -0.99, r: 35.1, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.85, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 59.2, z: -0.41, r: 43.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Claude 4.5 Haiku

Anthropic · Proprietary · 컨텍스트 200k · 종합지능 **30.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $1.0 · 출력 $5.0 · 혼합 $0.77/1M · 100.0 t/s · TTFT 16.11s · 200k ctx` · 가성비 39.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.8 | 실측 | [[aa-omniscience]] 17.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 51.0 | +0.07 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 27.0%×0.5 |
| 에이전트 | 43.3 | -0.45 | 실측 | [[gdpval]] 20.0%×1.0, [[itbench]] 27.0%×1.0, [[tau2-bench]] 55.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 27.0%×1.0 |
| 신뢰성 | 76.4 | +1.76 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 35.1 | -0.99 | 실측 | [[mmmu-pro]] 59.0%×1.0 |
| 긴문맥 | 62.7 | +0.85 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 43.9 | -0.41 | 실측 | [[ifbench]] 54.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
