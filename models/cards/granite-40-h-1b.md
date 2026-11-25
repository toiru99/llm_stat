---
type: Model
title: Granite 4.0 H 1B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 1.5
is_reasoning: false
radar:
  knowledge: { s: 13.2, z: -1.63, r: 25.5, estimated: false }  # 전문 지식
  reasoning: { s: 8.1, z: -1.34, r: 29.9, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 9.9, z: -1.31, r: 30.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 19.8, z: -1.28, r: 30.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.0 H 1B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Granite 4.0 H 1B

IBM · Open · Tiny(1.5B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 25.5 | -1.63 | 실측 | [[gpqa-diamond]] 26.2626%×0.4, [[humanitys-last-exam]] 5.00463%×0.3 |
| 추론 | 29.9 | -1.34 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 26.2626%×1.0, [[humanitys-last-exam]] 5.00463%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 30.3 | -1.31 | 실측 | [[tau2-bench]] 19.5906%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 7%×1.0 |
| 지시 따르기 | 30.9 | -1.28 | 실측 | [[ifbench]] 26.1905%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
