---
type: Model
title: Llama 3.2 3B
creator: Meta
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Tiny
params_b: 3
is_reasoning: false
radar:
  knowledge: { s: 12.8, z: -1.34, r: 29.9, estimated: false }  # 전문 지식
  reasoning: { s: 12.2, z: -1.13, r: 33.1, estimated: false }  # 추론
  coding: { s: 8.3, z: -1.6, r: 25.9, estimated: false }  # 코딩
  agentic: { s: 21.2, z: -0.59, r: 41.2, estimated: false }  # 에이전트
  trust: { s: 8.7, z: -0.9, r: 36.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.6, z: -1.38, r: 29.2, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.37, r: 29.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# Llama 3.2 3B

Meta · Open · Tiny(3B) · 컨텍스트 128k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 신뢰성
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 29.9 | -1.34 | 실측 | [[gpqa-diamond]] 24.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 33.1 | -1.13 | 실측 | [[gpqa-diamond]] 24.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 25.9 | -1.6 | 실측 | [[scicode]] 5.0%×1.0 |
| 에이전트 | 41.2 | -0.59 | 실측 | [[tau2-bench]] 21.0%×1.0 |
| 신뢰성 | 36.5 | -0.9 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.2 | -1.38 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 29.4 | -1.37 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
