---
type: Model
title: Nemotron 3 Nano (non-reasoning)
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: 0.058
output_speed_tps: 148.32596980383948
context_window: 1000000
status: current
size_class: Small
params_b: 31.6
is_reasoning: false
radar:
  knowledge: { s: 22.0, z: -1.21, r: 31.9, estimated: false }  # 전문 지식
  reasoning: { s: 13.2, z: -1.09, r: 33.6, estimated: false }  # 추론
  coding: { s: 18.4, z: -0.76, r: 38.5, estimated: false }  # 코딩
  agentic: { s: 15.5, z: -1.12, r: 33.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.0, z: -1.4, r: 29.0, estimated: false }  # 긴문맥
  instruction: { s: 35.6, z: -0.62, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Nano (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Nemotron 3 Nano (non-reasoning)

NVIDIA · Open · Small(31.6B) · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.2 · 혼합 $0.058/1M · 148.32596980383948 t/s · TTFT 1.434218646336038s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 31.9 | -1.21 | 실측 | [[gpqa-diamond]] 39.899%×0.4, [[humanitys-last-exam]] 4.58758%×0.3 |
| 추론 | 33.6 | -1.09 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 39.899%×1.0, [[humanitys-last-exam]] 4.58758%×1.0 |
| 코딩 | 38.5 | -0.76 | 실측 | [[terminal-bench]] 12.1212%×0.5 |
| 에이전트 | 33.3 | -1.12 | 실측 | [[gdpval]] -349.72 Elo×1.0, [[tau2-bench]] 25.4386%×1.0, [[terminal-bench]] 12.1212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.0 | -1.4 | 실측 | [[aa-lcr]] 10.6667%×1.0 |
| 지시 따르기 | 40.8 | -0.62 | 실측 | [[ifbench]] 37.483%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
