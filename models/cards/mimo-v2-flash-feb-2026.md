---
type: Model
title: MiMo-V2-Flash (Feb 2026)
creator: Xiaomi
license: Open
intelligence_index: 26.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: current
size_class: Large
params_b: 309
is_reasoning: true
radar:
  knowledge: { s: 44.2, z: 0.16, r: 52.4, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.42, r: 56.4, estimated: false }  # 추론
  coding: { s: 47.0, z: 0.52, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 1.26, r: 68.9, estimated: false }  # 에이전트
  trust: { s: 51.5, z: 1.28, r: 69.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.94, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.33, r: 69.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash (Feb 2026)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# MiMo-V2-Flash (Feb 2026)

Xiaomi · Open · Large(309B) · 컨텍스트 256k · 종합지능 **26.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.4 | +0.16 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 22.0%×0.3 |
| 추론 | 56.4 | +0.42 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 22.0%×1.0 |
| 코딩 | 57.7 | +0.52 | 실측 | [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 68.9 | +1.26 | 실측 | [[tau2-bench]] 93.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | 69.1 | +1.28 | 실측 | [[aa-omniscience]] 52.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.2 | +0.94 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 69.9 | +1.33 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
