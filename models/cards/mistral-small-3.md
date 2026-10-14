---
type: Model
title: Mistral Small 3
creator: Mistral
license: Open
intelligence_index: 7.0
price_blended_usd_1m: 0.053
output_speed_tps: 65.0
context_window: 32000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.1, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.4, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 7.7, z: -1.0, r: 35.0, estimated: true }  # 코딩
  agentic: { s: 20.2, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 10.5, z: -0.75, r: 38.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.57, r: 26.4, estimated: false }  # 긴문맥
  instruction: { s: 19.7, z: -1.45, r: 28.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-14
timestamp: 2026-10-14T00:00:00Z
---

# Mistral Small 3

Mistral · Open · Small · 컨텍스트 32k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.08 · 혼합 $0.053/1M · 65.0 t/s · TTFT 0.89s · 32k ctx` · 가성비 132.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[gpqa-diamond]] 46.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[gpqa-diamond]] 46.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.0 | -1.0 | 추정 | (추정) |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 20.0%×1.0 |
| 신뢰성 | 38.8 | -0.75 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.4 | -1.57 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 28.2 | -1.45 | 실측 | [[ifbench]] 26.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
