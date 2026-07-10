---
type: Model
title: Llama 4 Maverick
creator: Meta
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.34
output_speed_tps: 113.0
context_window: 1000000
status: current
size_class: Large
params_b: 402
is_reasoning: false
radar:
  knowledge: { s: 39.9, z: -0.02, r: 49.7, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.43, r: 43.5, estimated: false }  # 추론
  coding: { s: 40.2, z: -0.24, r: 46.4, estimated: false }  # 코딩
  agentic: { s: 10.2, z: -1.0, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 14.1, z: -0.64, r: 40.4, estimated: false }  # 신뢰성
  multimodal: { s: 68.1, z: -0.16, r: 47.6, estimated: false }  # 멀티모달
  long_context: { s: 60.5, z: 0.36, r: 55.5, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.35, r: 44.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 4 Maverick
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Llama 4 Maverick

Meta · Open · Large(402B) · 컨텍스트 1M · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.35 · 출력 $0.85 · 혼합 $0.34/1M · 113.0 t/s · TTFT 0.99s · 1M ctx` · 가성비 41.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.7 | -0.02 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.5 | -0.43 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 46.4 | -0.24 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 34.9 | -1.0 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 18.0%×1.0, [[tau3-banking]] 4.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 40.4 | -0.64 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 47.6 | -0.16 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 55.5 | +0.36 | 실측 | [[aa-lcr]] 46.0%×1.0 |
| 지시 따르기 | 44.7 | -0.35 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
