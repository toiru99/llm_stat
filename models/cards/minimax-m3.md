---
type: Model
title: MiniMax-M3
creator: MiniMax
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.222
output_speed_tps: None
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.3, z: 1.44, r: 71.6, estimated: false }  # 전문 지식
  reasoning: { s: 66.2, z: 0.92, r: 63.8, estimated: false }  # 추론
  coding: { s: 65.7, z: 0.95, r: 64.2, estimated: false }  # 코딩
  agentic: { s: 53.3, z: 0.65, r: 59.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.22, r: 68.4, estimated: false }  # 긴문맥
  instruction: { s: 100.0, z: 1.97, r: 79.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# MiniMax-M3

MiniMax · Open · Large · 컨텍스트 1M · 종합지능 **19.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 85.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.6 | +1.44 | 실측 | [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 39.0%×0.3 |
| 추론 | 63.8 | +0.92 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 39.0%×1.0 |
| 코딩 | 64.2 | +0.95 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 59.7 | +0.65 | 실측 | [[gdpval]] 1250.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.4 | +1.22 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 79.5 | +1.97 | 실측 | [[ifbench]] 83.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
