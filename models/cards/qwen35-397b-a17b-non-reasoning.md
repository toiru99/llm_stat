---
type: Model
title: Qwen3.5 397B A17B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 60.0
context_window: 262000
status: current
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 64.1, z: 0.65, r: 59.7, estimated: false }  # 전문 지식
  reasoning: { s: 60.0, z: 0.64, r: 59.7, estimated: false }  # 추론
  coding: { s: 54.5, z: 0.59, r: 58.8, estimated: false }  # 코딩
  agentic: { s: 54.5, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 52.1, z: -1.0, r: 35.0, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.59, r: 58.8, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.15, r: 52.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 397B A17B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Qwen3.5 397B A17B (non-reasoning)

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 60.0 t/s · TTFT 2.35s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.7 | +0.65 | 실측 | [[gpqa-diamond]] 86.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 59.7 | +0.64 | 실측 | [[gpqa-diamond]] 86.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 58.8 | +0.59 | 실측 | [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 35.0 | -1.0 | 실측 | [[mmmu-pro]] 53.0%×1.0 |
| 긴문맥 | 58.8 | +0.59 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 52.2 | +0.15 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
