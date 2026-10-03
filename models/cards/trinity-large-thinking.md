---
type: Model
title: Trinity Large Thinking
creator: Arcee AI
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.172
output_speed_tps: 355.0
context_window: 512000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.4, z: -0.01, r: 49.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.44, r: 56.7, estimated: false }  # 코딩
  agentic: { s: 34.4, z: -0.17, r: 47.5, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.66, r: 40.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.7, z: -0.27, r: 45.9, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.32, r: 54.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Trinity Large Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Trinity Large Thinking

Arcee AI · Open · Large · 컨텍스트 512k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $0.8 · 혼합 $0.172/1M · 355.0 t/s · TTFT 0.91s · 512k ctx` · 가성비 64.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.9 | -0.01 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 56.7 | +0.44 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 47.5 | -0.17 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 40.2 | -0.66 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.9 | -0.27 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 54.8 | +0.32 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
