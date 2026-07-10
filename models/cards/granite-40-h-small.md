---
type: Model
title: Granite 4.0 H Small
creator: IBM
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.08
output_speed_tps: 492.0
context_window: 128000
status: current
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.6, z: -0.99, r: 35.1, estimated: false }  # 추론
  coding: { s: 24.3, z: -0.91, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 10.1, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 12.9, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 11.8, z: -1.08, r: 33.8, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.05, r: 34.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 H Small
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Granite 4.0 H Small

IBM · Open · Small(32B) · 컨텍스트 128k · 종합지능 **5.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.06 · 출력 $0.25 · 혼합 $0.08/1M · 492.0 t/s · TTFT 10.78s · 128k ctx` · 가성비 62.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 42.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.1 | -0.99 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 42.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 실측 | [[scicode]] 21.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[tau2-bench]] 17.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.8 | -1.08 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 34.3 | -1.05 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
