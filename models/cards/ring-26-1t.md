---
type: Model
title: Ring-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: 31.0
price_blended_usd_1m: None
output_speed_tps: 126.0
context_window: 262000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 50.6, z: 0.44, r: 56.6, estimated: false }  # 전문 지식
  reasoning: { s: 45.2, z: 0.54, r: 58.1, estimated: false }  # 추론
  coding: { s: 61.3, z: 0.59, r: 58.9, estimated: false }  # 코딩
  agentic: { s: 52.2, z: 0.61, r: 59.2, estimated: false }  # 에이전트
  trust: { s: 17.2, z: -0.51, r: 42.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.27, r: 45.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# Ring-2.6-1T

InclusionAI · Open · Large(1000B) · 컨텍스트 262k · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $None/1M · 126.0 t/s · TTFT 3.33s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.6 | +0.44 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 18.0%×0.3 |
| 추론 | 58.1 | +0.54 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 18.0%×1.0 |
| 코딩 | 58.9 | +0.59 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 59.2 | +0.61 | 실측 | [[gdpval]] 21.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 42.3 | -0.51 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 45.9 | -0.27 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
