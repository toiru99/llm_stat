---
type: Model
title: MiniCPM-V 4.6 1.3B
creator: OpenBMB
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 262000
status: current
size_class: Tiny
params_b: 1.3
is_reasoning: false
radar:
  knowledge: { s: 16.0, z: -1.5, r: 27.6, estimated: false }  # 전문 지식
  reasoning: { s: 9.8, z: -1.26, r: 31.1, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 30.1, z: -0.6, r: 41.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 31.2, z: -2.05, r: 19.2, estimated: false }  # 멀티모달
  long_context: { s: 7.9, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 20.5, z: -1.24, r: 31.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM-V 4.6 1.3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# MiniCPM-V 4.6 1.3B

OpenBMB · Open · Tiny(1.3B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 27.6 | -1.5 | 실측 | [[gpqa-diamond]] 30.5051%×0.4, [[humanitys-last-exam]] 5.05097%×0.3 |
| 추론 | 31.1 | -1.26 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 30.5051%×1.0, [[humanitys-last-exam]] 5.05097%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 41.0 | -0.6 | 실측 | [[gdpval]] -362.61 Elo×1.0, [[tau2-bench]] 87.7193%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 19.2 | -2.05 | 실측 | [[mmmu-pro]] 37.9191%×1.0 |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 7%×1.0 |
| 지시 따르기 | 31.3 | -1.24 | 실측 | [[ifbench]] 26.7347%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
