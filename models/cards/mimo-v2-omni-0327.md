---
type: Model
title: MiMo-V2-Omni-0327
creator: Xiaomi
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.1, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 43.0, z: 0.41, r: 56.2, estimated: false }  # 추론
  coding: { s: 61.5, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 71.7, z: 1.44, r: 71.6, estimated: false }  # 에이전트
  trust: { s: 67.8, z: 1.79, r: 76.9, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.6, r: 59.0, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 1.0, r: 65.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni-0327
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# MiMo-V2-Omni-0327

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **36.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 56.2 | +0.41 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 71.6 | +1.44 | 실측 | [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 76.9 | +1.79 | 실측 | [[aa-omniscience]] 60.0%×1.0 |
| 멀티모달 | 59.0 | +0.6 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 65.0 | +1.0 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
