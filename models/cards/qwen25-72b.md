---
type: Model
title: Qwen2.5 72B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.477
output_speed_tps: 28.0662423286714
context_window: 131072
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.4, z: -0.96, r: 35.6, estimated: false }  # 전문 지식
  reasoning: { s: 16.3, z: -0.95, r: 35.7, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.13, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 20.9, z: -0.83, r: 37.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.9, z: -0.79, r: 38.1, estimated: true }  # 긴문맥
  instruction: { s: 34.8, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen2.5 72B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Qwen2.5 72B

Alibaba · Open · Medium · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $0.475 · 출력 $0.495 · 혼합 $0.477/1M · 28.0662423286714 t/s · TTFT 6.463163699389995s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.6 | -0.96 | 실측 | [[gpqa-diamond]] 49.0909090909091%×0.4, [[humanitys-last-exam]] 3.56%×0.3 |
| 추론 | 35.7 | -0.95 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.0909090909091%×1.0, [[humanitys-last-exam]] 3.56%×1.0 |
| 코딩 | 33.1 | -1.13 | 실측 | [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 37.5 | -0.83 | 실측 | [[tau2-bench]] 34.5029239766082%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.1 | -0.79 | 추정 | (추정) |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 36.8707482993197%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
