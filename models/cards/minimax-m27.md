---
type: Model
title: MiniMax-M2.7
creator: MiniMax
license: Open
intelligence_index: 39.0
price_blended_usd_1m: 0.222
output_speed_tps: 62.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 54.9, z: 0.68, r: 60.2, estimated: false }  # 전문 지식
  reasoning: { s: 49.5, z: 0.73, r: 60.9, estimated: false }  # 추론
  coding: { s: 71.9, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 46.8, z: 0.44, r: 56.6, estimated: false }  # 에이전트
  trust: { s: 72.1, z: 2.1, r: 81.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.4, z: 1.25, r: 68.7, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.51, r: 72.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.7
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# MiniMax-M2.7

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.222/1M · 62.0 t/s · TTFT 1.72s · 205k ctx` · 가성비 175.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.2 | +0.68 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 30.0%×0.3 |
| 추론 | 60.9 | +0.73 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 30.0%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 56.6 | +0.44 | 실측 | [[apex-agents]] 11.0%×1.0, [[gdpval]] 33.0%×1.0, [[itbench]] 26.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 10.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 81.5 | +2.1 | 실측 | [[aa-omniscience]] 64.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 68.7 | +1.25 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 72.6 | +1.51 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
