---
type: Model
title: Trinity Large Thinking
creator: Arcee AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 512000
status: current
size_class: Large
params_b: 399
is_reasoning: true
radar:
  knowledge: { s: 51.8, z: 0.25, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 32.7, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 48.4, z: 0.25, r: 53.7, estimated: false }  # 코딩
  agentic: { s: 42.3, z: -0.17, r: 47.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 42.9, z: -0.46, r: 43.2, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.48, r: 57.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Trinity Large Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Trinity Large Thinking

Arcee AI · Open · Large(399B) · 컨텍스트 512k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 512k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.25 | 실측 | [[gpqa-diamond]] 75.1515%×0.4, [[humanitys-last-exam]] 15.848%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 75.1515%×1.0, [[humanitys-last-exam]] 15.848%×1.0 |
| 코딩 | 53.7 | +0.25 | 실측 | [[scicode]] 40.625%×1.0, [[terminal-bench]] 22.7273%×0.5 |
| 에이전트 | 47.4 | -0.17 | 실측 | [[gdpval]] 343.39 Elo×1.0, [[tau2-bench]] 90.0585%×1.0, [[tau3-banking]] 5.7732%×1.0, [[terminal-bench]] 22.7273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 43.2 | -0.46 | 실측 | [[aa-lcr]] 38%×1.0 |
| 지시 따르기 | 57.2 | +0.48 | 실측 | [[ifbench]] 56.2585%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
