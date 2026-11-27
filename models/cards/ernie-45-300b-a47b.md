---
type: Model
title: ERNIE 4.5 300B A47B
creator: Baidu
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Large
params_b: 300
is_reasoning: false
radar:
  knowledge: { s: 48.5, z: 0.08, r: 51.2, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.33, r: 45.1, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.07, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 4.6, z: -1.5, r: 27.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 37.9, z: -0.52, r: 42.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — ERNIE 4.5 300B A47B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# ERNIE 4.5 300B A47B

Baidu · Open · Large(300B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.2 | +0.08 | 실측 | [[gpqa-diamond]] 81.1111%×0.4, [[humanitys-last-exam]] 3.33642%×0.3 |
| 추론 | 45.1 | -0.33 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 81.1111%×1.0, [[humanitys-last-exam]] 3.33642%×1.0 |
| 코딩 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 27.5 | -1.5 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 42.2 | -0.52 | 실측 | [[ifbench]] 39.1156%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
