---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: 30.0
price_blended_usd_1m: 0.222
output_speed_tps: 74.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 53.6, z: 0.61, r: 59.2, estimated: false }  # 전문 지식
  reasoning: { s: 47.6, z: 0.6, r: 59.0, estimated: false }  # 추론
  coding: { s: 59.1, z: 0.95, r: 64.2, estimated: false }  # 코딩
  agentic: { s: 46.5, z: 0.34, r: 55.2, estimated: false }  # 에이전트
  trust: { s: 63.9, z: 1.87, r: 78.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.57, r: 73.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **30.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 74.0 t/s · TTFT 1.47s · 205k ctx` · 가성비 135.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.2 | +0.61 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 59.0 | +0.6 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 64.2 | +0.95 | 실측 | [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 55.2 | +0.34 | 실측 | [[apex-agents]] 11.0%×1.0, [[gdpval]] 30.0%×1.0, [[itbench]] 26.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 78.0 | +1.87 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 73.6 | +1.57 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
