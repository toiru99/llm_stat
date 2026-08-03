---
type: Model
title: DeepSeek V4 Flash
creator: DeepSeek
license: Open
intelligence_index: 29.0
price_blended_usd_1m: None
output_speed_tps: 107.0
context_window: 1000000
status: current
size_class: Large
params_b: 284
is_reasoning: false
radar:
  knowledge: { s: 43.9, z: 0.12, r: 51.8, estimated: false }  # 전문 지식
  reasoning: { s: 28.4, z: -0.3, r: 45.4, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.47, r: 57.0, estimated: false }  # 코딩
  agentic: { s: 73.2, z: 1.43, r: 71.4, estimated: false }  # 에이전트
  trust: { s: 4.6, z: -1.11, r: 33.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 43.4, z: -0.18, r: 47.3, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.16, r: 47.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# DeepSeek V4 Flash

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **29.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $None/1M · 107.0 t/s · TTFT 1.16s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.8 | +0.12 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 45.4 | -0.3 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 57.0 | +0.47 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 34.0%×0.5 |
| 에이전트 | 71.4 | +1.43 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 34.0%×1.0 |
| 신뢰성 | 33.3 | -1.11 | 실측 | [[aa-omniscience]] 5.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.3 | -0.18 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 47.6 | -0.16 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
