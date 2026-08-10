---
type: Model
title: MiniMax M1 40k
creator: MiniMax
license: Open
intelligence_index: 14.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 456
is_reasoning: true
radar:
  knowledge: { s: 45.0, z: 0.2, r: 53.1, estimated: false }  # 전문 지식
  reasoning: { s: 41.0, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 43.2, z: -0.17, r: 47.5, estimated: false }  # 코딩
  agentic: { s: 17.7, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 17.4, z: -0.41, r: 43.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 67.5, z: 0.55, r: 58.3, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.53, r: 42.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax M1 40k
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-10
timestamp: 2026-08-10T00:00:00Z
---

# MiniMax M1 40k

MiniMax · Open · Large(456B) · 컨텍스트 1M · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 추론
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.1 | +0.2 | 실측 | [[gpqa-diamond]] 68.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[gpqa-diamond]] 68.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 47.5 | -0.17 | 실측 | [[scicode]] 38.0%×1.0, [[terminal-bench]] 2.0%×0.5 |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 32.0%×1.0, [[terminal-bench]] 2.0%×1.0 |
| 신뢰성 | 43.9 | -0.41 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 58.3 | +0.55 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 42.1 | -0.53 | 실측 | [[ifbench]] 41.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
