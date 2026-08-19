---
type: Model
title: Mistral Large 3
creator: Mistral
license: Open
intelligence_index: 16.0
price_blended_usd_1m: 0.6
output_speed_tps: 49.0
context_window: 256000
status: current
size_class: Large
params_b: 675
is_reasoning: false
radar:
  knowledge: { s: 39.1, z: -0.1, r: 48.5, estimated: false }  # 전문 지식
  reasoning: { s: 24.6, z: -0.53, r: 42.0, estimated: false }  # 추론
  coding: { s: 48.1, z: -0.01, r: 49.8, estimated: false }  # 코딩
  agentic: { s: 17.9, z: -0.74, r: 38.9, estimated: false }  # 에이전트
  trust: { s: 14.0, z: -0.58, r: 41.2, estimated: false }  # 신뢰성
  multimodal: { s: 58.6, z: -0.66, r: 40.1, estimated: false }  # 멀티모달
  long_context: { s: 42.2, z: -0.25, r: 46.2, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.84, r: 37.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# Mistral Large 3

Mistral · Open · Large(675B) · 컨텍스트 256k · 종합지능 **16.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · 49.0 t/s · TTFT 1.16s · 256k ctx` · 가성비 26.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.5 | -0.1 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.0 | -0.53 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 49.8 | -0.01 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 38.9 | -0.74 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 41.2 | -0.58 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 40.1 | -0.66 | 실측 | [[mmmu-pro]] 56.0%×1.0 |
| 긴문맥 | 46.2 | -0.25 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 37.5 | -0.84 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
