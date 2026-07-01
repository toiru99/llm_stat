---
type: Model
title: Grok 4.3 (high)
creator: xAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.64
output_speed_tps: 123.0
context_window: 1000000
radar:
  knowledge: { s: 67.3, z: 0.69, r: 60.4, estimated: false }  # 전문 지식
  reasoning: { s: 62.1, z: 0.81, r: 62.1, estimated: false }  # 추론
  coding: { s: 72.3, z: 0.52, r: 57.8, estimated: false }  # 코딩
  agentic: { s: 55.6, z: 0.15, r: 52.3, estimated: false }  # 에이전트
  trust: { s: 88.8, z: 1.81, r: 77.1, estimated: false }  # 신뢰성
  multimodal: { s: 89.7, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.24, r: 68.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Grok 4.3 (high)

xAI · Proprietary · 컨텍스트 1M · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 123.0 t/s · TTFT 20.13s · 1M ctx` · 가성비 59.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.4 | +0.69 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 62.1 | +0.81 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 57.8 | +0.52 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 52.3 | +0.15 | 실측 | [[apex-agents]] 17.0%×1.0, [[gdpval]] 29.0%×1.0, [[itbench]] 33.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 77.1 | +1.81 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
