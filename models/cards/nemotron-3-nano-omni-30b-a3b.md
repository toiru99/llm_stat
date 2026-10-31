---
type: Model
title: Nemotron 3 Nano Omni 30B A3B
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.26
output_speed_tps: 231.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 27.4, z: -0.97, r: 35.5, estimated: false }  # 전문 지식
  reasoning: { s: 24.8, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 12.4, z: -0.75, r: 38.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -1.0, r: 35.0, estimated: false }  # 멀티모달
  long_context: { s: 44.9, z: -0.22, r: 46.7, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.8, r: 62.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Nemotron 3 Nano Omni 30B A3B

NVIDIA · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.5 · 출력 $0.9 · 혼합 $0.26/1M · 231.0 t/s · TTFT 0.92s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.97 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 38.8 | -0.75 | 실측 | [[gdpval]] 237.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 35.0 | -1.0 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 46.7 | -0.22 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 62.0 | +0.8 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
