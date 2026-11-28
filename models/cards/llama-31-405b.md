---
type: Model
title: Llama 3.1 405B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Large
params_b: 405
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.85, r: 37.2, estimated: false }  # 전문 지식
  reasoning: { s: 17.4, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 14.8, z: -1.14, r: 32.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 28.6, z: -0.89, r: 36.6, estimated: false }  # 긴문맥
  instruction: { s: 37.8, z: -0.52, r: 42.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 405B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Llama 3.1 405B

Meta · Open · Large(405B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.2 | -0.85 | 실측 | [[gpqa-diamond]] 51.5152%×0.4, [[humanitys-last-exam]] 3.98%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 51.5152%×1.0, [[humanitys-last-exam]] 3.98%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 32.9 | -1.14 | 실측 | [[tau2-bench]] 19.0058%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.6 | -0.89 | 실측 | [[aa-lcr]] 25.3333%×1.0 |
| 지시 따르기 | 42.1 | -0.52 | 실측 | [[ifbench]] 39.0476%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
