---
type: Model
title: Qwen3.5 397B A17B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 48.3557944953981
context_window: 262144
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 61.4, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.16, r: 52.3, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 69.3, z: 0.84, r: 62.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 50.9, z: -1.05, r: 34.3, estimated: false }  # 멀티모달
  long_context: { s: 72.6, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: 55.5, z: 0.07, r: 51.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 397B A17B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Qwen3.5 397B A17B (non-reasoning)

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 48.3557944953981 t/s · TTFT 2.48165028167293s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[gpqa-diamond]] 86.0606060606061%×0.4, [[humanitys-last-exam]] 19.8331788693234%×0.3 |
| 추론 | 52.3 | +0.16 | 실측 | [[critpt]] 0.857142857142857%×1.0, [[gpqa-diamond]] 86.0606060606061%×1.0, [[humanitys-last-exam]] 19.8331788693234%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[terminal-bench]] 35.6060606060606%×0.5 |
| 에이전트 | 62.7 | +0.84 | 실측 | [[tau2-bench]] 83.9181286549708%×1.0, [[terminal-bench]] 35.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.3 | -1.05 | 실측 | [[mmmu-pro]] 52.6589595375723%×1.0 |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 64.3333333333333%×1.0 |
| 지시 따르기 | 51.0 | +0.07 | 실측 | [[ifbench]] 51.632653061224495%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
