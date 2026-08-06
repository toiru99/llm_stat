---
type: Model
title: Llama 4 Maverick
creator: Meta
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.327
output_speed_tps: 102.0
context_window: 1000000
status: current
size_class: Large
params_b: 402
is_reasoning: false
radar:
  knowledge: { s: 39.9, z: -0.07, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.48, r: 42.9, estimated: false }  # 추론
  coding: { s: 40.2, z: -0.3, r: 45.6, estimated: false }  # 코딩
  agentic: { s: 9.6, z: -1.05, r: 34.3, estimated: false }  # 에이전트
  trust: { s: 13.8, z: -0.68, r: 39.7, estimated: false }  # 신뢰성
  multimodal: { s: 67.1, z: -0.22, r: 46.6, estimated: false }  # 멀티모달
  long_context: { s: 60.5, z: 0.32, r: 54.8, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Maverick
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Llama 4 Maverick

Meta · Open · Large(402B) · 컨텍스트 1M · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.27 · 출력 $0.91 · 혼합 $0.327/1M · 102.0 t/s · TTFT 0.91s · 1M ctx` · 가성비 42.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.07 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 42.9 | -0.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 45.6 | -0.3 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 34.3 | -1.05 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 18.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 39.7 | -0.68 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 46.6 | -0.22 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 54.8 | +0.32 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
