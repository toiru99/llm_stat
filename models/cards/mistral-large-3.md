---
type: Model
title: Mistral Large 3
creator: Mistral
license: Open
intelligence_index: 16.0
price_blended_usd_1m: 0.6
output_speed_tps: 40.0
context_window: 256000
status: current
size_class: Large
params_b: 675
is_reasoning: false
radar:
  knowledge: { s: 39.8, z: -0.08, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.49, r: 42.7, estimated: false }  # 추론
  coding: { s: 48.1, z: 0.03, r: 50.5, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -0.69, r: 39.7, estimated: false }  # 에이전트
  trust: { s: 17.2, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: 58.6, z: -0.64, r: 40.4, estimated: false }  # 멀티모달
  long_context: { s: 46.1, z: -0.11, r: 48.3, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.8, r: 37.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Mistral Large 3

Mistral · Open · Large(675B) · 컨텍스트 256k · 종합지능 **16.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · 40.0 t/s · TTFT 1.29s · 256k ctx` · 가성비 26.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.08 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.7 | -0.49 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 50.5 | +0.03 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 16.0%×0.5 |
| 에이전트 | 39.7 | -0.69 | 실측 | [[gdpval]] 7.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 16.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 16.0%×1.0 |
| 멀티모달 | 40.4 | -0.64 | 실측 | [[mmmu-pro]] 56.0%×1.0 |
| 긴문맥 | 48.3 | -0.11 | 실측 | [[aa-lcr]] 35.0%×1.0 |
| 지시 따르기 | 37.9 | -0.8 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
