---
type: Model
title: Qwen3 4B
creator: Alibaba
license: Open
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 30.0, z: -0.58, r: 41.3, estimated: false }  # 전문 지식
  reasoning: { s: 26.9, z: -0.44, r: 43.5, estimated: false }  # 추론
  coding: { s: 7.7, z: -0.99, r: 35.2, estimated: true }  # 코딩
  agentic: { s: 19.2, z: -0.75, r: 38.8, estimated: false }  # 에이전트
  trust: { s: 12.8, z: -0.64, r: 40.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 29.6, z: -1.03, r: 34.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-04
timestamp: 2026-10-04T00:00:00Z
---

# Qwen3 4B

Alibaba · Open · Unknown · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.3 | -0.58 | 실측 | [[gpqa-diamond]] 52.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 43.5 | -0.44 | 실측 | [[gpqa-diamond]] 52.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.2 | -0.99 | 추정 | (추정) |
| 에이전트 | 38.8 | -0.75 | 실측 | [[tau2-bench]] 19.0%×1.0 |
| 신뢰성 | 40.5 | -0.64 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 34.6 | -1.03 | 실측 | [[ifbench]] 33.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
