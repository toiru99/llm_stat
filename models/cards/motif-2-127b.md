---
type: Model
title: Motif-2-12.7B
creator: Motif Technologies
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 44.0, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 26.5, z: -0.43, r: 43.6, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 26.3, z: -0.73, r: 39.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.5, z: -1.26, r: 31.1, estimated: false }  # 긴문맥
  instruction: { s: 63.0, z: 0.52, r: 57.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Motif-2-12.7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Motif-2-12.7B

Motif Technologies · Proprietary · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[gpqa-diamond]] 69.4949%×0.4, [[humanitys-last-exam]] 8.75811%×0.3 |
| 추론 | 43.6 | -0.43 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 69.4949%×1.0, [[humanitys-last-exam]] 8.75811%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 39.0 | -0.73 | 실측 | [[tau2-bench]] 46.4912%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.1 | -1.26 | 실측 | [[aa-lcr]] 14.6667%×1.0 |
| 지시 따르기 | 57.9 | +0.52 | 실측 | [[ifbench]] 57.0068%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
