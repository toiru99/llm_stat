---
type: Model
title: Ring-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.7, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 60.9, z: 0.69, r: 60.4, estimated: false }  # 추론
  coding: { s: 56.9, z: 0.65, r: 59.7, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.18, r: 52.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.9, z: 0.78, r: 61.8, estimated: false }  # 긴문맥
  instruction: { s: 45.6, z: -0.31, r: 45.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Ring-2.6-1T

InclusionAI · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[gpqa-diamond]] 85.7%×0.4, [[humanitys-last-exam]] 21.6%×0.3 |
| 추론 | 60.4 | +0.69 | 실측 | [[gpqa-diamond]] 85.7%×1.0, [[humanitys-last-exam]] 21.6%×1.0 |
| 코딩 | 59.7 | +0.65 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 28.8%×0.5 |
| 에이전트 | 52.7 | +0.18 | 실측 | [[gdpval]] 753.0%×1.0, [[tau3-banking]] 17.9%×1.0, [[terminal-bench]] 28.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.8 | +0.78 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 45.4 | -0.31 | 실측 | [[ifbench]] 44.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
