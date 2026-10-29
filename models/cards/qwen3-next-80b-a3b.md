---
type: Model
title: Qwen3 Next 80B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.193
output_speed_tps: 134.0
context_window: 262000
status: current
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 47.5, z: -0.09, r: 48.7, estimated: false }  # 전문 지식
  reasoning: { s: 43.0, z: -0.12, r: 48.1, estimated: false }  # 추론
  coding: { s: 12.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 12.1, z: -0.76, r: 38.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.6, z: 0.22, r: 53.3, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.56, r: 41.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Next 80B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Qwen3 Next 80B A3B

Alibaba · Open · Medium · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.1 · 출력 $1.1 · 혼합 $0.193/1M · 134.0 t/s · TTFT 0.85s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.7 | -0.09 | 실측 | [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 48.1 | -0.12 | 실측 | [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 38.6 | -0.76 | 실측 | [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 53.3 | +0.22 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 41.7 | -0.56 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
