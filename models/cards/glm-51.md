---
type: Model
title: GLM-5.1
creator: Z AI
license: Open
intelligence_index: 40.0
price_blended_usd_1m: 0.9
output_speed_tps: 81.0
context_window: 200000
radar:
  knowledge: { s: 53.3, z: 0.09, r: 51.3, estimated: false }  # 전문 지식
  reasoning: { s: 53.2, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 71.6, z: 0.53, r: 57.9, estimated: false }  # 코딩
  agentic: { s: 67.3, z: 0.61, r: 59.2, estimated: false }  # 에이전트
  trust: { s: 83.8, z: 1.76, r: 76.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.47, r: 57.1, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.97, r: 64.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-28
timestamp: 2026-06-28T00:00:00Z
---

# GLM-5.1

Z AI · Open · 컨텍스트 200k · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $1.4 · 출력 $4.4 · 혼합 $0.9/1M · 81.0 t/s · TTFT 1.42s · 200k ctx` · 가성비 44.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.3 | +0.09 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 57.9 | +0.53 | 실측 | [[scicode]] 44.0%×1.0, [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 59.2 | +0.61 | 실측 | [[gdpval]] 38.0%×1.0, [[itbench]] 40.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 76.4 | +1.76 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.1 | +0.47 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 64.5 | +0.97 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
