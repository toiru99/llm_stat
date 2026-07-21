---
type: Model
title: MiMo-V2-Flash (Feb 2026)
creator: Xiaomi
license: Open
intelligence_index: 33.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 45.8, z: 0.25, r: 53.8, estimated: false }  # 전문 지식
  reasoning: { s: 44.7, z: 0.57, r: 58.6, estimated: false }  # 추론
  coding: { s: 57.9, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 1.32, r: 69.9, estimated: false }  # 에이전트
  trust: { s: 60.0, z: 1.52, r: 72.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.32, r: 69.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash (Feb 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-21
timestamp: 2026-07-21T00:00:00Z
---

# MiMo-V2-Flash (Feb 2026)

Xiaomi · Open · Unknown · 컨텍스트 256k · 종합지능 **33.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.8 | +0.25 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 58.6 | +0.57 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 69.9 | +1.32 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 72.8 | +1.52 | 실측 | [[aa-omniscience]] 52.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 69.9 | +1.32 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
