---
type: Model
title: DeepSeek V4 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: 40.0
price_blended_usd_1m: None
output_speed_tps: 122.0
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 67.9, z: 1.26, r: 68.9, estimated: false }  # 전문 지식
  reasoning: { s: 58.5, z: 1.21, r: 68.2, estimated: false }  # 추론
  coding: { s: 68.2, z: 0.89, r: 63.4, estimated: false }  # 코딩
  agentic: { s: 65.3, z: 1.12, r: 66.8, estimated: false }  # 에이전트
  trust: { s: 3.4, z: -1.16, r: 32.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.71, r: 75.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-25
timestamp: 2026-07-25T00:00:00Z
---

# DeepSeek V4 Flash (max)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $None/1M · 122.0 t/s · TTFT 1.15s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.9 | +1.26 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 68.2 | +1.21 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 63.4 | +0.89 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 66.8 | +1.12 | 실측 | [[gdpval]] 34.0%×1.0, [[itbench]] 32.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 23.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 32.6 | -1.16 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 75.6 | +1.71 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
