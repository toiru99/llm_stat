---
type: Model
title: Mistral Small 3
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.053
output_speed_tps: None
context_window: 32000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.1, z: -0.77, r: 38.5, estimated: false }  # 전문 지식
  reasoning: { s: 23.4, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.95, r: 35.8, estimated: true }  # 코딩
  agentic: { s: 20.2, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 11.9, z: -0.69, r: 39.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.57, r: 26.4, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.45, r: 28.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Mistral Small 3

Mistral · Open · Small · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 신뢰성
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.08 · 혼합 $0.053/1M · None t/s · TTFT Nones · 32k ctx` · 가성비 132.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.5 | -0.77 | 실측 | [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.8 | -0.95 | 추정 | (추정) |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 20.0%×1.0 |
| 신뢰성 | 39.7 | -0.69 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.4 | -1.57 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 28.3 | -1.45 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
