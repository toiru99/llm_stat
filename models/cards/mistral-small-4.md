---
type: Model
title: Mistral Small 4
creator: Mistral
license: Open
intelligence_index: 11.0
price_blended_usd_1m: 0.097
output_speed_tps: 192.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 40.3, z: -0.11, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.25, r: 46.2, estimated: false }  # 추론
  coding: { s: 44.1, z: 0.26, r: 54.0, estimated: false }  # 코딩
  agentic: { s: 19.2, z: -0.75, r: 38.8, estimated: false }  # 에이전트
  trust: { s: 32.0, z: 0.25, r: 53.8, estimated: false }  # 신뢰성
  multimodal: { s: 57.5, z: -0.69, r: 39.6, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.14, r: 52.1, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.15, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-03
timestamp: 2026-10-03T00:00:00Z
---

# Mistral Small 4

Mistral · Open · Unknown · 컨텍스트 256k · 종합지능 **11.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.097/1M · 192.0 t/s · TTFT 0.75s · 256k ctx` · 가성비 113.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.11 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.2 | -0.25 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 54.0 | +0.26 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 38.8 | -0.75 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 41.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 33.0%×1.0 |
| 멀티모달 | 39.6 | -0.69 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 52.1 | +0.14 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 47.8 | -0.15 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
