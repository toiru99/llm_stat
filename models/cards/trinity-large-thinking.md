---
type: Model
title: Trinity Large Thinking
creator: Arcee AI
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.172
output_speed_tps: 336.0
context_window: 512000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.4, z: 0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: -0.08, r: 48.9, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.46, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 34.4, z: -0.15, r: 47.7, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.7, z: -0.26, r: 46.0, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.33, r: 55.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Trinity Large Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Trinity Large Thinking

Arcee AI · Open · Large · 컨텍스트 512k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $0.8 · 혼합 $0.172/1M · 336.0 t/s · TTFT 1.33s · 512k ctx` · 가성비 64.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +0.0 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 48.9 | -0.08 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 57.0 | +0.46 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 47.7 | -0.15 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.0 | -0.26 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 55.0 | +0.33 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
