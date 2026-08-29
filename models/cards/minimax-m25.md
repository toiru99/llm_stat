---
type: Model
title: MiniMax-M2.5
creator: MiniMax
license: Open
intelligence_index: 34.0
price_blended_usd_1m: 0.201
output_speed_tps: 87.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 50.8, z: 0.5, r: 57.6, estimated: false }  # 전문 지식
  reasoning: { s: 42.8, z: 0.42, r: 56.3, estimated: false }  # 추론
  coding: { s: 65.5, z: 0.75, r: 61.2, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.48, r: 72.1, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.65, r: 40.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 86.7, z: 1.15, r: 67.2, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.35, r: 70.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2.5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# MiniMax-M2.5

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.201/1M · 87.0 t/s · TTFT 1.57s · 205k ctx` · 가성비 169.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 57.6 | +0.5 | 실측 | [[aa-omniscience]] 26.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 56.3 | +0.42 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 61.2 | +0.75 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 72.1 | +1.48 | 실측 | [[tau2-bench]] 95.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 40.3 | -0.65 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.2 | +1.15 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 70.3 | +1.35 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
