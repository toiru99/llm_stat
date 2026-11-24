---
type: Model
title: Qwen3.5 0.8B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262144
status: current
size_class: Tiny
params_b: 0.9
is_reasoning: true
radar:
  knowledge: { s: 0.9, z: -2.23, r: 16.5, estimated: false }  # 전문 지식
  reasoning: { s: 0.5, z: -1.72, r: 24.2, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 16.3, z: -1.08, r: 33.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 15.1, z: -2.87, r: 6.9, estimated: false }  # 멀티모달
  long_context: { s: 10.2, z: -1.46, r: 28.1, estimated: false }  # 긴문맥
  instruction: { s: 13.2, z: -1.55, r: 26.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 0.8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.5 0.8B

Alibaba · Open · Tiny(0.9B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 16.5 | -2.23 | 실측 | [[gpqa-diamond]] 11.1111%×0.4, [[humanitys-last-exam]] 1.0658%×0.3 |
| 추론 | 24.2 | -1.72 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 11.1111%×1.0, [[humanitys-last-exam]] 1.0658%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 33.7 | -1.08 | 실측 | [[gdpval]] -381.33 Elo×1.0, [[tau2-bench]] 47.6608%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 6.9 | -2.87 | 실측 | [[mmmu-pro]] 25.8382%×1.0 |
| 긴문맥 | 28.1 | -1.46 | 실측 | [[aa-lcr]] 9%×1.0 |
| 지시 따르기 | 26.8 | -1.55 | 실측 | [[ifbench]] 21.4966%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
