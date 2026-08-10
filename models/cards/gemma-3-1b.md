---
type: Model
title: Gemma 3 1B
creator: Google
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 32000
status: past
size_class: Tiny
params_b: 1
is_reasoning: false
radar:
  knowledge: { s: 8.0, z: -1.57, r: 26.5, estimated: false }  # 전문 지식
  reasoning: { s: 8.0, z: -1.33, r: 30.1, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.92, r: 21.2, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.2, r: 32.0, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.35, r: 44.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.49, r: 27.6, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.74, r: 23.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 3 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# Gemma 3 1B

Google · Open · Tiny(1B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.5 | -1.57 | 실측 | [[aa-omniscience]] 4.0%×1.0, [[gpqa-diamond]] 24.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.1 | -1.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 24.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 21.2 | -1.92 | 실측 | [[scicode]] 1.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 32.0 | -1.2 | 실측 | [[tau2-bench]] 11.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 44.7 | -0.35 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.6 | -1.49 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 23.8 | -1.74 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
