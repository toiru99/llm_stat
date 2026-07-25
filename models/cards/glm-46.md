---
type: Model
title: GLM-4.6
creator: Z AI
license: Open
intelligence_index: 29.0
price_blended_usd_1m: None
output_speed_tps: 44.0
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: false
radar:
  knowledge: { s: 48.6, z: 0.35, r: 55.3, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: 0.07, r: 51.0, estimated: false }  # 추론
  coding: { s: 54.8, z: 0.33, r: 55.0, estimated: false }  # 코딩
  agentic: { s: 43.6, z: 0.28, r: 54.2, estimated: false }  # 에이전트
  trust: { s: 4.6, z: -1.11, r: 33.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.64, r: 59.6, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# GLM-4.6

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.55 · 출력 $2.2 · 혼합 $None/1M · 44.0 t/s · TTFT 2.43s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.3 | +0.35 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 51.0 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 55.0 | +0.33 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 54.2 | +0.28 | 실측 | [[gdpval]] 22.0%×1.0, [[tau2-bench]] 70.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | 33.4 | -1.11 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.6 | +0.64 | 실측 | [[aa-lcr]] 54.0%×1.0 |
| 지시 따르기 | 44.1 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
