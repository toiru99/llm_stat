---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: 39.0
price_blended_usd_1m: 0.222
output_speed_tps: 61.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 54.7, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 49.1, z: 0.67, r: 60.0, estimated: false }  # 추론
  coding: { s: 71.9, z: 0.96, r: 64.5, estimated: false }  # 코딩
  agentic: { s: 46.8, z: 0.39, r: 55.9, estimated: false }  # 에이전트
  trust: { s: 72.1, z: 1.97, r: 79.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.2, r: 68.1, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.45, r: 71.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 61.0 t/s · TTFT 1.76s · 205k ctx` · 가성비 175.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 60.0 | +0.67 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 64.5 | +0.96 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 55.9 | +0.39 | 실측 | [[apex-agents]] 11.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 26.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 79.5 | +1.97 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.1 | +1.2 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 71.8 | +1.45 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
