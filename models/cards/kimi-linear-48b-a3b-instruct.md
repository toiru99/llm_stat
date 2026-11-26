---
type: Model
title: Kimi Linear 48B A3B Instruct
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: current
size_class: Medium
params_b: 49.1
is_reasoning: false
radar:
  knowledge: { s: 21.6, z: -1.23, r: 31.6, estimated: false }  # 전문 지식
  reasoning: { s: 19.1, z: -0.8, r: 38.0, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.8, r: 38.0, estimated: false }  # 코딩
  agentic: { s: 8.6, z: -1.36, r: 29.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.6, z: -0.8, r: 38.0, estimated: false }  # 긴문맥
  instruction: { s: 22.4, z: -1.16, r: 32.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi Linear 48B A3B Instruct
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Kimi Linear 48B A3B Instruct

Kimi · Open · Medium(49.1B) · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 31.6 | -1.23 | 실측 | [[gpqa-diamond]] 41.2121%×0.4, [[humanitys-last-exam]] 2.45598%×0.3 |
| 추론 | 38.0 | -0.8 | 실측 | [[gpqa-diamond]] 41.2121%×1.0, [[humanitys-last-exam]] 2.45598%×1.0 |
| 코딩 | 38.0 | -0.8 | 실측 | [[terminal-bench]] 11.3636%×0.5 |
| 에이전트 | 29.6 | -1.36 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 11.3636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.0 | -0.8 | 실측 | [[aa-lcr]] 28%×1.0 |
| 지시 따르기 | 32.5 | -1.16 | 실측 | [[ifbench]] 28.0952%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
