---
type: Model
title: Reka Flash 3
creator: Reka AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.11
output_speed_tps: 87.0162676024879
context_window: 128000
status: current
size_class: Small
params_b: 21
is_reasoning: true
radar:
  knowledge: { s: 30.5, z: -0.79, r: 38.1, estimated: false }  # 전문 지식
  reasoning: { s: 18.2, z: -0.84, r: 37.3, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.66, r: 25.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 25.7, z: -1.03, r: 34.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Reka Flash 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Reka Flash 3

Reka AI · Open · Small(21B) · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.1 · 출력 $0.2 · 혼합 $0.11/1M · 87.0162676024879 t/s · TTFT 0.834751677195904s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 38.1 | -0.79 | 실측 | [[gpqa-diamond]] 52.9293%×0.4, [[humanitys-last-exam]] 4.44%×0.3 |
| 추론 | 37.3 | -0.84 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 52.9293%×1.0, [[humanitys-last-exam]] 4.44%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 25.1 | -1.66 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 34.6 | -1.03 | 실측 | [[ifbench]] 30.4082%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
