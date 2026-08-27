---
type: Model
title: DeepSeek V4 Pro (high)
creator: DeepSeek
license: Open
intelligence_index: 44.0
price_blended_usd_1m: 0.1765
output_speed_tps: 68.0
context_window: 1000000
status: current
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 70.3, z: 1.37, r: 70.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.33, r: 69.9, estimated: false }  # 추론
  coding: { s: 72.3, z: 0.96, r: 64.4, estimated: false }  # 코딩
  agentic: { s: 67.3, z: 1.16, r: 67.4, estimated: false }  # 에이전트
  trust: { s: 10.5, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.17, r: 67.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# DeepSeek V4 Pro (high)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 68.0 t/s · TTFT 1.65s · 1M ctx` · 가성비 249.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.6 | +1.37 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 69.9 | +1.33 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 64.4 | +0.96 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 67.4 | +1.16 | 실측 | [[gdpval]] 40.0%×1.0, [[tau2-bench]] 94.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 67.5 | +1.17 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
