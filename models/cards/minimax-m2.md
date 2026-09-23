---
type: Model
title: MiniMax-M2
creator: MiniMax
license: Open
intelligence_index: 19.0
price_blended_usd_1m: 0.39
output_speed_tps: 98.0
context_window: 205000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 42.6, z: 0.04, r: 50.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.6, z: -0.05, r: 49.2, estimated: false }  # 추론
  coding: { s: 39.4, z: 0.15, r: 52.2, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 0.99, r: 64.8, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.86, r: 37.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 71.9, z: 0.65, r: 59.7, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.28, r: 69.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-23
timestamp: 2026-09-23T00:00:00Z
---

# MiniMax-M2

MiniMax · Open · Large · 컨텍스트 205k · 종합지능 **19.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 98.0 t/s · TTFT 1.66s · 205k ctx` · 가성비 48.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.6 | +0.04 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 49.2 | -0.05 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 52.2 | +0.15 | 실측 | [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 64.8 | +0.99 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | 37.1 | -0.86 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.7 | +0.65 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
