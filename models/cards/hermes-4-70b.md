---
type: Model
title: Hermes 4 70B
creator: Nous Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Medium
params_b: 70.6
is_reasoning: true
radar:
  knowledge: { s: 44.2, z: -0.12, r: 48.1, estimated: false }  # 전문 지식
  reasoning: { s: 26.7, z: -0.42, r: 43.7, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 14.8, z: -1.14, r: 32.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.9, z: -1.43, r: 28.5, estimated: false }  # 긴문맥
  instruction: { s: 26.9, z: -0.98, r: 35.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 4 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Hermes 4 70B

Nous Research · Open · Medium(70.6B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.1 | -0.12 | 실측 | [[gpqa-diamond]] 69.899%×0.4, [[humanitys-last-exam]] 8.75811%×0.3 |
| 추론 | 43.7 | -0.42 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.899%×1.0, [[humanitys-last-exam]] 8.75811%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 32.9 | -1.14 | 실측 | [[tau2-bench]] 22.5146%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.5 | -1.43 | 실측 | [[aa-lcr]] 9.66667%×1.0 |
| 지시 따르기 | 35.3 | -0.98 | 실측 | [[ifbench]] 31.2925%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
