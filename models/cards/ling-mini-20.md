---
type: Model
title: Ling-mini-2.0
creator: InclusionAI
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: 16.3
is_reasoning: false
radar:
  knowledge: { s: 21.9, z: -0.92, r: 36.1, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.71, r: 39.3, estimated: false }  # 추론
  coding: { s: 15.6, z: -1.32, r: 30.2, estimated: false }  # 코딩
  agentic: { s: 7.3, z: -1.17, r: 32.5, estimated: false }  # 에이전트
  trust: { s: 2.1, z: -1.07, r: 34.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.2, z: -1.31, r: 30.4, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.51, r: 27.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-mini-2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Ling-mini-2.0

InclusionAI · Open · Small(16.3B) · 컨텍스트 131k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.1 | -0.92 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 39.3 | -0.71 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 30.2 | -1.32 | 실측 | [[scicode]] 14.0%×1.0, [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 32.5 | -1.17 | 실측 | [[tau2-bench]] 13.0%×1.0, [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | 34.0 | -1.07 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 30.4 | -1.31 | 실측 | [[aa-lcr]] 6.0%×1.0 |
| 지시 따르기 | 27.4 | -1.51 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
