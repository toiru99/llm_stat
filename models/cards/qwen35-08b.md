---
type: Model
title: Qwen3.5 0.8B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 0.9, z: -2.22, r: 16.6, estimated: false }  # 전문 지식
  reasoning: { s: 0.8, z: -2.08, r: 18.8, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.26, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 10.2, z: -0.83, r: 37.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 14.9, z: -2.86, r: 7.1, estimated: false }  # 멀티모달
  long_context: { s: 10.1, z: -1.28, r: 30.7, estimated: false }  # 긴문맥
  instruction: { s: 13.2, z: -1.7, r: 24.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Qwen3.5 0.8B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 16.6 | -2.22 | 실측 | [[gpqa-diamond]] 11.1%×0.4, [[humanitys-last-exam]] 1.1%×0.3 |
| 추론 | 18.8 | -2.08 | 실측 | [[gpqa-diamond]] 11.1%×1.0, [[humanitys-last-exam]] 1.1%×1.0 |
| 코딩 | 31.0 | -1.26 | 실측 | [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 37.5 | -0.83 | 실측 | [[gdpval]] 381.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 7.1 | -2.86 | 실측 | [[mmmu-pro]] 26.0%×1.0 |
| 긴문맥 | 30.7 | -1.28 | 실측 | [[aa-lcr]] 9.0%×1.0 |
| 지시 따르기 | 24.4 | -1.7 | 실측 | [[ifbench]] 21.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
