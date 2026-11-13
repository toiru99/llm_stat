---
type: Model
title: GLM-5.1
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.794
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 67.8, z: 1.0, r: 65.0, estimated: false }  # 전문 지식
  reasoning: { s: 64.3, z: 1.02, r: 65.4, estimated: false }  # 추론
  coding: { s: 63.4, z: 0.85, r: 62.8, estimated: false }  # 코딩
  agentic: { s: 55.9, z: 0.71, r: 60.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.9, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 90.2, z: 1.59, r: 73.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GLM-5.1

Z AI · Open · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $1.19 · 출력 $3.74 · 혼합 $0.794/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.0 | +1.0 | 실측 | [[gpqa-diamond]] 86.8%×0.4, [[humanitys-last-exam]] 30.1%×0.3 |
| 추론 | 65.4 | +1.02 | 실측 | [[gpqa-diamond]] 86.8%×1.0, [[humanitys-last-exam]] 30.1%×1.0 |
| 코딩 | 62.8 | +0.85 | 실측 | [[scicode]] 44.8%×1.0, [[terminal-bench]] 43.2%×0.5 |
| 에이전트 | 60.6 | +0.71 | 실측 | [[gdpval]] 1125.0%×1.0, [[itbench]] 40.3%×1.0, [[tau3-banking]] 13.6%×1.0, [[terminal-bench]] 43.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.4 | +0.9 | 실측 | [[aa-lcr]] 73.7%×1.0 |
| 지시 따르기 | 73.9 | +1.59 | 실측 | [[ifbench]] 76.3%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
