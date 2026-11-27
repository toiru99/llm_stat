---
type: Model
title: MiniCPM5-2B
creator: OpenBMB
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: current
size_class: Tiny
params_b: 2.6
is_reasoning: true
radar:
  knowledge: { s: 44.5, z: -0.11, r: 48.4, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.31, r: 45.3, estimated: false }  # 코딩
  agentic: { s: 44.8, z: -0.08, r: 48.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 66.9, z: 0.28, r: 54.2, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# MiniCPM5-2B

OpenBMB · Open · Tiny(2.6B) · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 코딩, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.4 | -0.11 | 실측 | [[gpqa-diamond]] 70.202%×0.4, [[humanitys-last-exam]] 8.94347%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 70.202%×1.0, [[humanitys-last-exam]] 8.94347%×1.0 |
| 코딩 | 45.3 | -0.31 | 실측 | [[scicode]] 26.2731%×1.0 |
| 에이전트 | 48.7 | -0.08 | 실측 | [[gdpval]] 714.47 Elo×1.0, [[tau3-banking]] 20.8247%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.2 | +0.28 | 실측 | [[aa-lcr]] 59.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
