---
type: Model
title: NVIDIA Nemotron Nano 12B v2 VL
creator: NVIDIA
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: 13.2
is_reasoning: true
radar:
  knowledge: { s: 33.9, z: -0.63, r: 40.6, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.15, r: 32.7, estimated: false }  # 코딩
  agentic: { s: 14.2, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 51.2, z: -1.03, r: 34.5, estimated: false }  # 멀티모달
  long_context: { s: 46.2, z: -0.35, r: 44.7, estimated: false }  # 긴문맥
  instruction: { s: 27.8, z: -0.94, r: 35.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — NVIDIA Nemotron Nano 12B v2 VL
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# NVIDIA Nemotron Nano 12B v2 VL

NVIDIA · Open · Small(13.2B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.6 | -0.63 | 실측 | [[gpqa-diamond]] 57.1717%×0.4, [[humanitys-last-exam]] 5.51437%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 57.1717%×1.0, [[humanitys-last-exam]] 5.51437%×1.0 |
| 코딩 | 32.7 | -1.15 | 실측 | [[terminal-bench]] 4.54545%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 21.345%×1.0, [[terminal-bench]] 4.54545%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.5 | -1.03 | 실측 | [[mmmu-pro]] 52.8902%×1.0 |
| 긴문맥 | 44.7 | -0.35 | 실측 | [[aa-lcr]] 41%×1.0 |
| 지시 따르기 | 35.9 | -0.94 | 실측 | [[ifbench]] 31.9048%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
