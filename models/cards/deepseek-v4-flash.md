---
type: Model
title: DeepSeek V4 Flash
creator: DeepSeek
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.105
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: false
radar:
  knowledge: { s: 42.4, z: 0.06, r: 50.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.41, r: 56.2, estimated: false }  # 코딩
  agentic: { s: 73.2, z: 1.44, r: 71.5, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.04, r: 34.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.2, r: 47.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# DeepSeek V4 Flash

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.105/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 276.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.9 | +0.06 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 56.2 | +0.41 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 71.5 | +1.44 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 34.3 | -1.04 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 47.0 | -0.2 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
