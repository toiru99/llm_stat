---
type: Model
title: Trinity Large Thinking
creator: Arcee AI
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.243
output_speed_tps: 202.0
context_window: 512000
status: current
size_class: Large
params_b: 399
is_reasoning: true
radar:
  knowledge: { s: 43.7, z: 0.15, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.8, z: 0.07, r: 51.0, estimated: false }  # 추론
  coding: { s: 51.6, z: 0.17, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 35.5, z: -0.05, r: 49.2, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.56, r: 41.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.8, z: -0.11, r: 48.4, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.41, r: 56.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Trinity Large Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-28
timestamp: 2026-08-28T00:00:00Z
---

# Trinity Large Thinking

Arcee AI · Open · Large(399B) · 컨텍스트 512k · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.23 · 출력 $0.88 · 혼합 $0.243/1M · 202.0 t/s · TTFT 1.43s · 512k ctx` · 가성비 78.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.15 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 51.0 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 52.5 | +0.17 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 49.2 | -0.05 | 실측 | [[gdpval]] 3.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 41.6 | -0.56 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.4 | -0.11 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 56.1 | +0.41 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
