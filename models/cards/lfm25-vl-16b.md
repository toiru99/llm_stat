---
type: Model
title: LFM2.5-VL-1.6B
creator: Liquid AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: current
size_class: Tiny
params_b: 1.6
is_reasoning: false
radar:
  knowledge: { s: 15.0, z: -1.55, r: 26.8, estimated: false }  # 전문 지식
  reasoning: { s: 9.2, z: -1.29, r: 30.6, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 4.3, z: -1.51, r: 27.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 16.0, z: -2.83, r: 7.6, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 29.5, z: -0.87, r: 36.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM2.5-VL-1.6B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# LFM2.5-VL-1.6B

Liquid AI · Open · Tiny(1.6B) · 컨텍스트 32k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 26.8 | -1.55 | 실측 | [[gpqa-diamond]] 28.8889%×0.4, [[humanitys-last-exam]] 5.09731%×0.3 |
| 추론 | 30.6 | -1.29 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 28.8889%×1.0, [[humanitys-last-exam]] 5.09731%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 27.4 | -1.51 | 실측 | [[tau2-bench]] 8.47953%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 7.6 | -2.83 | 실측 | [[mmmu-pro]] 26.5318%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 36.9 | -0.87 | 실측 | [[ifbench]] 33.1293%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
