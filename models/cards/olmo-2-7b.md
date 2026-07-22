---
type: Model
title: OLMo 2 7B
creator: Allen Institute for AI
license: Open
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Small
params_b: 7.3
is_reasoning: false
radar:
  knowledge: { s: 17.0, z: -1.14, r: 32.9, estimated: false }  # 전문 지식
  reasoning: { s: 16.1, z: -0.92, r: 36.2, estimated: false }  # 추론
  coding: { s: 4.4, z: -1.77, r: 23.5, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.41, r: 28.9, estimated: false }  # 에이전트
  trust: { s: 9.0, z: -0.89, r: 36.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.46, r: 28.1, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.49, r: 27.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — OLMo 2 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# OLMo 2 7B

Allen Institute for AI · Open · Small(7.3B) · 컨텍스트 4k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.9 | -1.14 | 실측 | [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 23.5 | -1.77 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.9 | -1.41 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 36.7 | -0.89 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.1 | -1.46 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.7 | -1.49 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
