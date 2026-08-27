---
type: Model
title: DeepSeek V4 Flash
creator: DeepSeek
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.0873
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: false
radar:
  knowledge: { s: 42.4, z: 0.05, r: 50.7, estimated: false }  # 전문 지식
  reasoning: { s: 28.6, z: -0.35, r: 44.7, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.39, r: 55.8, estimated: false }  # 코딩
  agentic: { s: 73.2, z: 1.38, r: 70.6, estimated: false }  # 에이전트
  trust: { s: 3.5, z: -1.06, r: 34.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.19, r: 47.1, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.21, r: 46.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# DeepSeek V4 Flash

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.09 · 출력 $0.2 · 혼합 $0.0873/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 332.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.7 | +0.05 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 44.7 | -0.35 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 55.8 | +0.39 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 70.6 | +1.38 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 34.0 | -1.06 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.1 | -0.19 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 46.8 | -0.21 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
