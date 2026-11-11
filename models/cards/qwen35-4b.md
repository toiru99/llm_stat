---
type: Model
title: Qwen3.5 4B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.042
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 49.6, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 44.9, z: 0.09, r: 51.3, estimated: false }  # 추론
  coding: { s: 27.6, z: -0.34, r: 44.9, estimated: false }  # 코딩
  agentic: { s: 20.3, z: -0.49, r: 42.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.2, r: 47.1, estimated: false }  # 멀티모달
  long_context: { s: 71.0, z: 0.54, r: 58.1, estimated: false }  # 긴문맥
  instruction: { s: 56.0, z: 0.14, r: 52.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Qwen3.5 4B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[gpqa-diamond]] 77.1%×0.4, [[humanitys-last-exam]] 9.9%×0.3 |
| 추론 | 51.3 | +0.09 | 실측 | [[gpqa-diamond]] 77.1%×1.0, [[humanitys-last-exam]] 9.9%×1.0 |
| 코딩 | 44.9 | -0.34 | 실측 | [[terminal-bench]] 18.2%×0.5 |
| 에이전트 | 42.6 | -0.49 | 실측 | [[tau3-banking]] 6.8%×1.0, [[terminal-bench]] 18.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.1 | -0.2 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 58.1 | +0.54 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 52.1 | +0.14 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
