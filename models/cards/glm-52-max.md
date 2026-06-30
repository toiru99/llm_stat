---
type: Model
title: GLM-5.2 (max)
creator: Z AI
license: Open
intelligence_index: 51.0
price_blended_usd_1m: 0.9
output_speed_tps: 164.0
context_window: 1000000
radar:
  knowledge: { s: 58.9, z: 0.35, r: 55.2, estimated: false }  # 전문 지식
  reasoning: { s: 78.9, z: 1.63, r: 74.5, estimated: false }  # 추론
  coding: { s: 82.5, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 84.8, z: 1.31, r: 69.7, estimated: false }  # 에이전트
  trust: { s: 85.0, z: 1.82, r: 77.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.9, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 0.8, r: 62.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.2 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# GLM-5.2 (max)

Z AI · Open · 컨텍스트 1M · 종합지능 **51.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.9/1M · 164.0 t/s · TTFT 1.44s · 1M ctx` · 가성비 56.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.2 | +0.35 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 40.0%×0.3 |
| 추론 | 74.5 | +1.63 | 실측 | [[critpt]] 21.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 40.0%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 50.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 69.7 | +1.31 | 실측 | [[apex-agents]] 34.0%×1.0, [[gdpval]] 51.0%×1.0, [[itbench]] 43.0%×1.0, [[tau2-bench]] 99.0%×1.0, [[tau3-banking]] 27.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | 77.3 | +1.82 | 실측 | [[aa-omniscience]] 72.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
