---
type: Model
title: GLM-4.7
creator: Z AI
license: Open
intelligence_index: 34.0
price_blended_usd_1m: None
output_speed_tps: 122.0
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: false
radar:
  knowledge: { s: 56.9, z: 0.78, r: 61.7, estimated: false }  # 전문 지식
  reasoning: { s: 47.6, z: 0.72, r: 60.9, estimated: false }  # 추론
  coding: { s: 66.2, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 57.2, z: 0.81, r: 62.1, estimated: false }  # 에이전트
  trust: { s: 10.6, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.04, r: 65.7, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.08, r: 66.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# GLM-4.7

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.6 · 출력 $2.2 · 혼합 $None/1M · 122.0 t/s · TTFT 0.88s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.7 | +0.78 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 25.0%×0.3 |
| 추론 | 60.9 | +0.72 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 25.0%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 32.0%×0.5 |
| 에이전트 | 62.1 | +0.81 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 32.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.7 | +1.04 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
