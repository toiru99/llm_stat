---
type: Model
title: Olmo 3 7B
creator: Allen Institute for AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: current
size_class: Small
params_b: 7
is_reasoning: false
radar:
  knowledge: { s: 22.7, z: -1.17, r: 32.5, estimated: false }  # 전문 지식
  reasoning: { s: 13.8, z: -1.06, r: 34.1, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 6.3, z: -1.44, r: 28.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 29.0, z: -0.89, r: 36.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Olmo 3 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Olmo 3 7B

Allen Institute for AI · Open · Small(7B) · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 32.5 | -1.17 | 실측 | [[gpqa-diamond]] 40%×0.4, [[humanitys-last-exam]] 5.7924%×0.3 |
| 추론 | 34.1 | -1.06 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 40%×1.0, [[humanitys-last-exam]] 5.7924%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 28.4 | -1.44 | 실측 | [[tau2-bench]] 12.5731%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 36.7 | -0.89 | 실측 | [[ifbench]] 32.7891%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
