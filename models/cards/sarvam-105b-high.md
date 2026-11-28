---
type: Model
title: Sarvam 105B (high)
creator: Sarvam
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0436
output_speed_tps: 201.589644872609
context_window: 128000
status: current
size_class: Medium
params_b: 106
is_reasoning: true
radar:
  knowledge: { s: 48.2, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 29.2, z: -0.29, r: 45.6, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 24.7, z: -0.79, r: 38.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 31.2, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sarvam 105B (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Sarvam 105B (high)

Sarvam · Open · Medium(106B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.042 · 출력 $0.17 · 혼합 $0.0436/1M · 201.589644872609 t/s · TTFT 2.28057201633778s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[gpqa-diamond]] 73.8384%×0.4, [[humanitys-last-exam]] 11.0287%×0.3 |
| 추론 | 45.6 | -0.29 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 73.8384%×1.0, [[humanitys-last-exam]] 11.0287%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 38.2 | -0.79 | 실측 | [[tau2-bench]] 46.7836%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 34.3537%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
