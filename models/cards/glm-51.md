---
type: Model
title: GLM-5.1
creator: Z AI
license: Open
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: 72.0
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: false
radar:
  knowledge: { s: 53.3, z: 0.57, r: 58.6, estimated: false }  # 전문 지식
  reasoning: { s: 53.1, z: 0.94, r: 64.1, estimated: false }  # 추론
  coding: { s: 70.6, z: 0.99, r: 64.9, estimated: false }  # 코딩
  agentic: { s: 65.5, z: 1.13, r: 66.9, estimated: false }  # 에이전트
  trust: { s: 80.5, z: 2.46, r: 86.9, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.95, r: 64.3, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.53, r: 73.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# GLM-5.1

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.39 · 출력 $4.4 · 혼합 $None/1M · 72.0 t/s · TTFT 1.78s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.6 | +0.57 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 64.1 | +0.94 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 64.9 | +0.99 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 66.9 | +1.13 | 실측 | [[gdpval]] 38.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 86.9 | +2.46 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.3 | +0.95 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 73.0 | +1.53 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
