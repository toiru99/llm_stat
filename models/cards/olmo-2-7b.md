---
type: Model
title: OLMo 2 7B
creator: Allen Institute for AI
license: Open
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Small
params_b: 7.3
is_reasoning: false
radar:
  knowledge: { s: 15.7, z: -1.23, r: 31.6, estimated: false }  # 전문 지식
  reasoning: { s: 14.6, z: -1.0, r: 35.1, estimated: false }  # 추론
  coding: { s: 4.3, z: -1.8, r: 23.1, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.45, r: 28.2, estimated: false }  # 에이전트
  trust: { s: 5.7, z: -0.89, r: 36.6, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.51, r: 27.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — OLMo 2 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# OLMo 2 7B

Allen Institute for AI · Open · Small(7.3B) · 컨텍스트 4k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.6 | -1.23 | 실측 | [[gpqa-diamond]] 29.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 35.1 | -1.0 | 실측 | [[gpqa-diamond]] 29.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 23.1 | -1.8 | 실측 | [[scicode]] 4.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.2 | -1.45 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 36.6 | -0.89 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 27.4 | -1.51 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
