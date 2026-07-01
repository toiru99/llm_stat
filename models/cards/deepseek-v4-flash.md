---
type: Model
title: DeepSeek V4 Flash
creator: DeepSeek
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.06
output_speed_tps: 112.0
context_window: 1000000
radar:
  knowledge: { s: 43.8, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.81, r: 37.8, estimated: false }  # 추론
  coding: { s: 59.1, z: -0.07, r: 49.0, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 0.92, r: 63.8, estimated: false }  # 에이전트
  trust: { s: 1.2, z: -1.16, r: 32.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.96, r: 35.6, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.83, r: 37.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# DeepSeek V4 Flash

DeepSeek · Open · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.06/1M · 112.0 t/s · TTFT 1.39s · 1M ctx` · 가성비 483.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 37.8 | -0.81 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 49.0 | -0.07 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 63.8 | +0.92 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.6 | -0.96 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 37.6 | -0.83 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
