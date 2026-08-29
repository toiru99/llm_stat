---
type: Model
title: Ling-1T
creator: InclusionAI
license: Open
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 37.2, z: -0.17, r: 47.4, estimated: false }  # 전문 지식
  reasoning: { s: 29.1, z: -0.27, r: 45.9, estimated: false }  # 추론
  coding: { s: 44.4, z: -0.13, r: 48.0, estimated: false }  # 코딩
  agentic: { s: 25.0, z: -0.46, r: 43.0, estimated: false }  # 에이전트
  trust: { s: 3.1, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.4, z: -0.18, r: 47.3, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.84, r: 37.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Ling-1T

InclusionAI · Open · Large(1000B) · 컨텍스트 128k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.4 | -0.17 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.9 | -0.27 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 48.0 | -0.13 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 43.0 | -0.46 | 실측 | [[tau2-bench]] 33.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.3 | -0.18 | 실측 | [[aa-lcr]] 36.0%×1.0 |
| 지시 따르기 | 37.4 | -0.84 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
