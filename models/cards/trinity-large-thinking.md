---
type: Model
title: Trinity Large Thinking
creator: Arcee AI
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.243
output_speed_tps: 208.0
context_window: 512000
status: current
size_class: Large
params_b: 399
is_reasoning: true
radar:
  knowledge: { s: 43.3, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 36.1, z: 0.06, r: 50.9, estimated: false }  # 추론
  coding: { s: 51.6, z: 0.18, r: 52.6, estimated: false }  # 코딩
  agentic: { s: 43.4, z: 0.3, r: 54.5, estimated: false }  # 에이전트
  trust: { s: 14.0, z: -0.56, r: 41.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.8, z: -0.11, r: 48.3, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.34, r: 55.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Trinity Large Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Trinity Large Thinking

Arcee AI · Open · Large(399B) · 컨텍스트 512k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.23 · 출력 $0.88 · 혼합 $0.243/1M · 208.0 t/s · TTFT 1.18s · 512k ctx` · 가성비 74.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 75.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 50.9 | +0.06 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 75.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 52.6 | +0.18 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 23.0%×0.5 |
| 에이전트 | 54.5 | +0.3 | 실측 | [[gdpval]] 3.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[terminal-bench]] 23.0%×1.0 |
| 신뢰성 | 41.6 | -0.56 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.3 | -0.11 | 실측 | [[aa-lcr]] 38.0%×1.0 |
| 지시 따르기 | 55.1 | +0.34 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
