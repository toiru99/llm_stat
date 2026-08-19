---
type: Model
title: MiMo-V2-Omni-0327
creator: Xiaomi
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.6, z: 0.11, r: 51.7, estimated: false }  # 전문 지식
  reasoning: { s: 44.0, z: 0.42, r: 56.3, estimated: false }  # 추론
  coding: { s: 61.5, z: 0.54, r: 58.1, estimated: false }  # 코딩
  agentic: { s: 71.7, z: 1.37, r: 70.5, estimated: false }  # 에이전트
  trust: { s: 67.4, z: 1.76, r: 76.5, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.57, r: 58.6, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 77.5, z: 0.94, r: 64.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni-0327
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# MiMo-V2-Omni-0327

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.7 | +0.11 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 23.0%×0.3 |
| 추론 | 56.3 | +0.42 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 23.0%×1.0 |
| 코딩 | 58.1 | +0.54 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 70.5 | +1.37 | 실측 | [[tau2-bench]] 88.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 76.5 | +1.76 | 실측 | [[aa-omniscience]] 60.0%×1.0 |
| 멀티모달 | 58.6 | +0.57 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 실측 | [[ifbench]] 67.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
