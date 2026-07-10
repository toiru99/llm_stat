---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.22
output_speed_tps: 45.0
context_window: 205000
radar:
  knowledge: { s: 55.2, z: -0.05, r: 49.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.9, z: -0.0, r: 49.9, estimated: false }  # 추론
  coding: { s: 71.9, z: 0.34, r: 55.2, estimated: false }  # 코딩
  agentic: { s: 48.6, z: -0.23, r: 46.5, estimated: false }  # 에이전트
  trust: { s: 77.5, z: 1.61, r: 74.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.94, r: 64.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · 컨텍스트 205k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.22/1M · 45.0 t/s · TTFT 1.99s · 205k ctx` · 가성비 172.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.3 | -0.05 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 49.9 | +-0.0 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 55.2 | +0.34 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 46.5 | -0.23 | 실측 | [[apex-agents]] 11.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 26.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 74.2 | +1.61 | 실측 | [[aa-omniscience]] 66.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 64.1 | +0.94 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
