---
type: Model
title: Llama 4 Scout
creator: Meta
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.228
output_speed_tps: 130.0
context_window: 10000000
status: current
size_class: Medium
params_b: 109
is_reasoning: false
radar:
  knowledge: { s: 28.1, z: -0.62, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -0.68, r: 39.8, estimated: false }  # 추론
  coding: { s: 19.9, z: -1.16, r: 32.6, estimated: false }  # 코딩
  agentic: { s: 6.0, z: -1.21, r: 31.9, estimated: false }  # 에이전트
  trust: { s: 19.6, z: -0.21, r: 46.9, estimated: false }  # 신뢰성
  multimodal: { s: 54.3, z: -0.82, r: 37.7, estimated: false }  # 멀티모달
  long_context: { s: 36.1, z: -0.4, r: 43.9, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.54, r: 41.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Scout
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Llama 4 Scout

Meta · Open · Medium(109B) · 컨텍스트 10M · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.18 · 출력 $0.66 · 혼합 $0.228/1M · 130.0 t/s · TTFT 0.79s · 10M ctx` · 가성비 43.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.62 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 59.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.8 | -0.68 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 59.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.6 | -1.16 | 실측 | [[scicode]] 17.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 31.9 | -1.21 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 15.0%×1.0, [[tau3-banking]] 3.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 46.9 | -0.21 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | 37.7 | -0.82 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 43.9 | -0.4 | 실측 | [[aa-lcr]] 30.0%×1.0 |
| 지시 따르기 | 41.9 | -0.54 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
