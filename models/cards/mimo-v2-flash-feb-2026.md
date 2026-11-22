---
type: Model
title: MiMo-V2-Flash (Feb 2026)
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.0, z: 0.66, r: 59.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.7, z: 0.25, r: 53.8, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 70.6, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.5, z: 0.8, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 83.9, z: 1.25, r: 68.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash (Feb 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# MiMo-V2-Flash (Feb 2026)

Xiaomi · Open · Large · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.9 | +0.66 | 실측 | [[gpqa-diamond]] 83.5353535353535%×0.4, [[humanitys-last-exam]] 22.1037998146432%×0.3 |
| 추론 | 53.8 | +0.25 | 실측 | [[critpt]] 2.85714285714286%×1.0, [[gpqa-diamond]] 83.5353535353535%×1.0, [[humanitys-last-exam]] 22.1037998146432%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.060606060606098%×0.5 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[tau2-bench]] 93.2748538011696%×1.0, [[terminal-bench]] 31.060606060606098%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 61.9 | +0.8 | 실측 | [[aa-lcr]] 71.3333333333333%×1.0 |
| 지시 따르기 | 68.8 | +1.25 | 실측 | [[ifbench]] 71.8367346938776%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
