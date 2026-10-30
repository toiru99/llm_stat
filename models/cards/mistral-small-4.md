---
type: Model
title: Mistral Small 4
creator: Mistral
license: Open
intelligence_index: 4.0
price_blended_usd_1m: 0.097
output_speed_tps: 177.0
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 50.9, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 31.0, z: -0.67, r: 40.0, estimated: false }  # 추론
  coding: { s: 44.1, z: 0.24, r: 53.5, estimated: false }  # 코딩
  agentic: { s: 18.4, z: -0.54, r: 41.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 57.5, z: -0.72, r: 39.1, estimated: false }  # 멀티모달
  long_context: { s: 56.2, z: 0.12, r: 51.8, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.09, r: 48.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 4
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Mistral Small 4

Mistral · Open · Unknown · 컨텍스트 256k · 종합지능 **4.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.097/1M · 177.0 t/s · TTFT 0.88s · 256k ctx` · 가성비 41.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 40.0 | -0.67 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 53.5 | +0.24 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 41.9 | -0.54 | 실측 | [[gdpval]] 370.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 39.1 | -0.72 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 51.8 | +0.12 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 48.7 | -0.09 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
