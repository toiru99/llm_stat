---
type: Model
title: MiMo-V2.5-Pro (non-reasoning)
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1406
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 51.9, z: 0.22, r: 53.3, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.13, r: 48.0, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.2, r: 47.0, estimated: false }  # 긴문맥
  instruction: { s: 43.0, z: -0.46, r: 43.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# MiMo-V2.5-Pro (non-reasoning)

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.348 · 출력 $0.696 · 혼합 $0.1406/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.3 | +0.22 | 실측 | [[gpqa-diamond]] 76.1616161616162%×0.4, [[humanitys-last-exam]] 14.7822057460612%×0.3 |
| 추론 | 48.0 | -0.13 | 실측 | [[critpt]] 1.1428571428571401%×1.0, [[gpqa-diamond]] 76.1616161616162%×1.0, [[humanitys-last-exam]] 14.7822057460612%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[tau2-bench]] 72.5146198830409%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.0 | -0.2 | 실측 | [[aa-lcr]] 41.6666666666667%×1.0 |
| 지시 따르기 | 43.2 | -0.46 | 실측 | [[ifbench]] 42.7210884353741%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
