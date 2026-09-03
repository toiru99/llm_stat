---
type: Model
title: MiniCPM5-1B (Non-reasoning)
creator: OpenBMB
license: Open
intelligence_index: 12.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: current
size_class: Tiny
params_b: 1
is_reasoning: false
radar:
  knowledge: { s: 5.9, z: -1.71, r: 24.4, estimated: false }  # 전문 지식
  reasoning: { s: 9.0, z: -1.28, r: 30.9, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.93, r: 21.0, estimated: false }  # 코딩
  agentic: { s: 41.4, z: 0.15, r: 52.3, estimated: false }  # 에이전트
  trust: { s: 100.0, z: 3.56, r: 100, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 6.0, z: -1.35, r: 29.8, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.86, r: 37.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniCPM5-1B (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# MiniCPM5-1B (Non-reasoning)

OpenBMB · Open · Tiny(1B) · 컨텍스트 128k · 종합지능 **12.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 24.4 | -1.71 | 실측 | [[aa-omniscience]] 0.0%×1.0, [[gpqa-diamond]] 27.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 30.9 | -1.28 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 27.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 21.0 | -1.93 | 실측 | [[scicode]] 1.0%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 52.3 | +0.15 | 실측 | [[tau2-bench]] 82.0%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | 100 | +3.56 | 실측 | [[aa-omniscience]] 99.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 29.8 | -1.35 | 실측 | [[aa-lcr]] 5.0%×1.0 |
| 지시 따르기 | 37.1 | -0.86 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
