---
type: Model
title: MiniMax-M3
creator: MiniMax
license: Open
intelligence_index: 19.0483629313801
price_blended_usd_1m: 0.222
output_speed_tps: 108.682653919279
context_window: 1000000
status: current
size_class: Large
params_b: 428
is_reasoning: true
radar:
  knowledge: { s: 77.1, z: 1.48, r: 72.1, estimated: false }  # 전문 지식
  reasoning: { s: 52.8, z: 0.88, r: 63.1, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.82, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 64.1, z: 0.6, r: 59.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 99.3, z: 2.03, r: 80.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# MiniMax-M3

MiniMax · Open · Large(428B) · 컨텍스트 1M · 종합지능 **19.0483629313801**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 108.682653919279 t/s · TTFT 1.44793980373995s · 1M ctx` · 가성비 85.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.1 | +1.48 | 실측 | [[gpqa-diamond]] 92.9293%×0.4, [[humanitys-last-exam]] 38.9713%×0.3 |
| 추론 | 63.1 | +0.88 | 실측 | [[critpt]] 3.71429%×1.0, [[gpqa-diamond]] 92.9293%×1.0, [[humanitys-last-exam]] 38.9713%×1.0 |
| 코딩 | 62.4 | +0.82 | 실측 | [[scicode]] 47.1065%×1.0, [[terminal-bench]] 42.4242%×0.5 |
| 에이전트 | 59.0 | +0.6 | 실측 | [[gdpval]] 1249.71 Elo×1.0, [[tau2-bench]] 88.8889%×1.0, [[tau3-banking]] 15.2577%×1.0, [[terminal-bench]] 42.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.5549%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 83%×1.0 |
| 지시 따르기 | 80.5 | +2.03 | 실측 | [[ifbench]] 82.8571%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
