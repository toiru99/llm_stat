---
type: Model
title: MiMo-V2-Omni-0327
creator: Xiaomi
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 62.6, z: 0.74, r: 61.0, estimated: false }  # 전문 지식
  reasoning: { s: 39.8, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.48, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 71.4, z: 0.92, r: 63.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.3, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 82.7, z: 0.86, r: 63.0, estimated: false }  # 긴문맥
  instruction: { s: 77.6, z: 0.99, r: 64.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Omni-0327
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# MiMo-V2-Omni-0327

Xiaomi · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.0 | +0.74 | 실측 | [[gpqa-diamond]] 85.45454545454551%×0.4, [[humanitys-last-exam]] 22.5671918443003%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 85.45454545454551%×1.0, [[humanitys-last-exam]] 22.5671918443003%×1.0 |
| 코딩 | 57.1 | +0.48 | 실측 | [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 63.8 | +0.92 | 실측 | [[tau2-bench]] 88.01169590643279%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 73.93063583815031%×1.0 |
| 긴문맥 | 63.0 | +0.86 | 실측 | [[aa-lcr]] 73.3333333333333%×1.0 |
| 지시 따르기 | 64.9 | +0.99 | 실측 | [[ifbench]] 67.3469387755102%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
