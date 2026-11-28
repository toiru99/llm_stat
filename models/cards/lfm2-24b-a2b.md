---
type: Model
title: LFM2 24B A2B
creator: Liquid AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32768
status: current
size_class: Small
params_b: 23.8
is_reasoning: false
radar:
  knowledge: { s: 26.7, z: -0.98, r: 35.3, estimated: false }  # 전문 지식
  reasoning: { s: 15.9, z: -0.96, r: 35.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 5.6, z: -1.46, r: 28.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 47.4, z: -0.13, r: 48.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2 24B A2B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# LFM2 24B A2B

Liquid AI · Open · Small(23.8B) · 컨텍스트 32k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.3 | -0.98 | 실측 | [[gpqa-diamond]] 47.3737%×0.4, [[humanitys-last-exam]] 4.21687%×0.3 |
| 추론 | 35.7 | -0.96 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 47.3737%×1.0, [[humanitys-last-exam]] 4.21687%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 28.0 | -1.46 | 실측 | [[tau2-bench]] 11.1111%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 48.1 | -0.13 | 실측 | [[ifbench]] 45.8503%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
