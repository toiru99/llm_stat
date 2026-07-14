---
type: Model
title: DeepSeek V4 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: 40.0
price_blended_usd_1m: 0.06
output_speed_tps: 102.0
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 67.9, z: 1.34, r: 70.0, estimated: false }  # 전문 지식
  reasoning: { s: 58.5, z: 1.32, r: 69.9, estimated: false }  # 추론
  coding: { s: 68.2, z: 0.94, r: 64.0, estimated: false }  # 코딩
  agentic: { s: 66.1, z: 1.17, r: 67.6, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.14, r: 32.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.74, r: 76.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-14
timestamp: 2026-07-14T00:00:00Z
---

# DeepSeek V4 Flash (max)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.06/1M · 102.0 t/s · TTFT 1.25s · 1M ctx` · 가성비 666.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.0 | +1.34 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 69.9 | +1.32 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 64.0 | +0.94 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 67.6 | +1.17 | 실측 | [[gdpval]] 34.0%×1.0, [[itbench]] 32.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 23.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 32.8 | -1.14 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 76.0 | +1.74 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
