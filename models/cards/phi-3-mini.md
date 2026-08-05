---
type: Model
title: Phi-3 Mini
creator: Microsoft
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 4100
status: past
size_class: Tiny
params_b: 3.8
is_reasoning: false
radar:
  knowledge: { s: 17.4, z: -1.12, r: 33.1, estimated: false }  # 전문 지식
  reasoning: { s: 16.0, z: -0.93, r: 36.0, estimated: false }  # 추론
  coding: { s: 10.0, z: -1.54, r: 26.8, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.42, r: 28.7, estimated: false }  # 에이전트
  trust: { s: 11.6, z: -0.78, r: 38.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.6, z: -1.39, r: 29.1, estimated: false }  # 긴문맥
  instruction: { s: 16.9, z: -1.5, r: 27.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Phi-3 Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-05
timestamp: 2026-08-05T00:00:00Z
---

# Phi-3 Mini

Microsoft · Open · Tiny(3.8B) · 컨텍스트 4k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.1 | -1.12 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 36.0 | -0.93 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 26.8 | -1.54 | 실측 | [[scicode]] 9.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 28.7 | -1.42 | 실측 | [[tau2-bench]] 0.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 38.2 | -0.78 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.1 | -1.39 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 27.5 | -1.5 | 실측 | [[ifbench]] 24.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
