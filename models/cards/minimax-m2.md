---
type: Model
title: MiniMax-M2
creator: MiniMax
license: Open
intelligence_index: 28.0
price_blended_usd_1m: 0.39
output_speed_tps: 84.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 43.4, z: 0.13, r: 52.0, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: 0.07, r: 51.1, estimated: false }  # 추론
  coding: { s: 53.1, z: 0.29, r: 54.3, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 1.06, r: 65.9, estimated: false }  # 에이전트
  trust: { s: 12.9, z: -0.7, r: 39.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 80.3, z: 0.94, r: 64.0, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.33, r: 69.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-19
timestamp: 2026-07-19T00:00:00Z
---

# MiniMax-M2

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 84.0 t/s · TTFT 1.69s · 205k ctx` · 가성비 71.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.0 | +0.13 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 12.0%×0.3 |
| 추론 | 51.1 | +0.07 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 12.0%×1.0 |
| 코딩 | 54.3 | +0.29 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 65.9 | +1.06 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | 39.5 | -0.7 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 64.0 | +0.94 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 69.9 | +1.33 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
