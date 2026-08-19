---
type: Model
title: Ring-2.6-1T
creator: InclusionAI
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.52
output_speed_tps: None
context_window: 262000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 50.9, z: 0.46, r: 56.9, estimated: false }  # 전문 지식
  reasoning: { s: 46.9, z: 0.56, r: 58.4, estimated: false }  # 추론
  coding: { s: 61.3, z: 0.53, r: 58.0, estimated: false }  # 코딩
  agentic: { s: 50.9, z: 0.55, r: 58.3, estimated: false }  # 에이전트
  trust: { s: 15.1, z: -0.53, r: 42.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.91, r: 63.7, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ring-2.6-1T
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Ring-2.6-1T

InclusionAI · Open · Large(1000B) · 컨텍스트 262k · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $2.5 · 혼합 $0.52/1M · None t/s · TTFT Nones · 262k ctx` · 가성비 61.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.9 | +0.46 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 58.4 | +0.56 | 실측 | [[critpt]] 4.0%×1.0, [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 58.0 | +0.53 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 58.3 | +0.55 | 실측 | [[gdpval]] 21.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 42.0 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.7 | +0.91 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
