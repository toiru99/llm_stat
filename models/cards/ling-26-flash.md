---
type: Model
title: Ling 2.6 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 35.7, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.19, r: 47.2, estimated: false }  # 코딩
  agentic: { s: 18.3, z: -0.56, r: 41.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.3, z: -0.53, r: 42.0, estimated: false }  # 긴문맥
  instruction: { s: 63.6, z: 0.47, r: 57.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 2.6 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Ling 2.6 Flash

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[gpqa-diamond]] 59.3%×0.4, [[humanitys-last-exam]] 6.3%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[gpqa-diamond]] 59.3%×1.0, [[humanitys-last-exam]] 6.3%×1.0 |
| 코딩 | 47.2 | -0.19 | 실측 | [[terminal-bench]] 21.2%×0.5 |
| 에이전트 | 41.6 | -0.56 | 실측 | [[gdpval]] 326.0%×1.0, [[tau3-banking]] 2.9%×1.0, [[terminal-bench]] 21.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.0 | -0.53 | 실측 | [[aa-lcr]] 31.3%×1.0 |
| 지시 따르기 | 57.0 | +0.47 | 실측 | [[ifbench]] 57.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
