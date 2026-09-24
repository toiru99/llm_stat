---
type: Model
title: Nemotron 3 Ultra
creator: NVIDIA
license: Open
intelligence_index: 23.0
price_blended_usd_1m: 0.482
output_speed_tps: 126.0
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 49.2, z: 0.36, r: 55.4, estimated: false }  # 전문 지식
  reasoning: { s: 48.0, z: 0.58, r: 58.7, estimated: false }  # 추론
  coding: { s: 54.8, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 50.8, z: 0.5, r: 57.5, estimated: false }  # 에이전트
  trust: { s: 70.1, z: 2.08, r: 81.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.81, r: 77.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Nemotron 3 Ultra

NVIDIA · Open · Large · 컨텍스트 262k · 종합지능 **23.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.6 · 출력 $2.5 · 혼합 $0.482/1M · 126.0 t/s · TTFT 2.47s · 262k ctx` · 가성비 47.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.4 | +0.36 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 58.7 | +0.58 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 57.5 | +0.5 | 실측 | [[gdpval]] 25.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 81.2 | +2.08 | 실측 | [[aa-omniscience]] 70.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 77.2 | +1.81 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
