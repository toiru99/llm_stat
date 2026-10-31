---
type: Model
title: GLM-5.1
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.846
output_speed_tps: 75.0
context_window: 200000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.9, z: 0.99, r: 64.9, estimated: false }  # 전문 지식
  reasoning: { s: 68.9, z: 1.05, r: 65.8, estimated: false }  # 추론
  coding: { s: 63.9, z: 0.9, r: 63.5, estimated: false }  # 코딩
  agentic: { s: 55.9, z: 0.75, r: 61.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.57, r: 73.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# GLM-5.1

Z AI · Open · Large · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $1.28 · 출력 $4.07 · 혼합 $0.846/1M · 75.0 t/s · TTFT 1.58s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.9 | +0.99 | 실측 | [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 65.8 | +1.05 | 실측 | [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 63.5 | +0.9 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 61.2 | +0.75 | 실측 | [[gdpval]] 1125.0%×1.0, [[itbench]] 40.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 74.0%×1.0 |
| 지시 따르기 | 73.5 | +1.57 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
