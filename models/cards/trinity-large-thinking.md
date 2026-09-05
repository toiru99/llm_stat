---
type: Model
title: Trinity Large Thinking
creator: Arcee AI
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 0.315
output_speed_tps: 333.0
context_window: 512000
status: current
size_class: Large
params_b: 399
is_reasoning: true
radar:
  knowledge: { s: 42.5, z: 0.08, r: 51.2, estimated: false }  # 전문 지식
  reasoning: { s: 34.9, z: -0.01, r: 49.9, estimated: false }  # 추론
  coding: { s: 34.8, z: 0.1, r: 51.5, estimated: false }  # 코딩
  agentic: { s: 34.7, z: -0.11, r: 48.4, estimated: false }  # 에이전트
  trust: { s: 12.4, z: -0.57, r: 41.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.7, z: -0.2, r: 47.0, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.39, r: 55.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Trinity Large Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Trinity Large Thinking

Arcee AI · Open · Large(399B) · 컨텍스트 512k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.25 · 출력 $0.9 · 혼합 $0.315/1M · 333.0 t/s · TTFT 1.15s · 512k ctx` · 가성비 38.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.2 | +0.08 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 49.9 | -0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 51.5 | +0.1 | 실측 | [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 48.4 | -0.11 | 실측 | [[gdpval]] 1.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 41.4 | -0.57 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.0 | -0.2 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 55.9 | +0.39 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
