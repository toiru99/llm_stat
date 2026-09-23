---
type: Model
title: Reka Flash 3
creator: Reka AI
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.26
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 24.9, z: -0.79, r: 38.1, estimated: false }  # 전문 지식
  reasoning: { s: 18.3, z: -0.82, r: 37.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.21, r: 31.8, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.45, r: 28.2, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.54, r: 26.9, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.17, r: 32.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Reka Flash 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# Reka Flash 3

Reka AI · Open · Small · 컨텍스트 128k · 종합지능 **6.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.8 · 혼합 $0.26/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.1 | -0.79 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 37.7 | -0.82 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 31.8 | -1.21 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.2 | -1.45 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.9 | -1.54 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 32.4 | -1.17 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
