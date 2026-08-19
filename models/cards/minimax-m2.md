---
type: Model
title: MiniMax-M2
creator: MiniMax
license: Open
intelligence_index: 29.0
price_blended_usd_1m: 0.39
output_speed_tps: 89.0
context_window: 205000
status: past
size_class: Large
params_b: 230
is_reasoning: true
radar:
  knowledge: { s: 43.3, z: 0.1, r: 51.5, estimated: false }  # 전문 지식
  reasoning: { s: 35.7, z: 0.01, r: 50.2, estimated: false }  # 추론
  coding: { s: 53.1, z: 0.2, r: 52.9, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 1.05, r: 65.8, estimated: false }  # 에이전트
  trust: { s: 8.1, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 78.3, z: 0.84, r: 62.6, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.22, r: 68.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiniMax-M2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# MiniMax-M2

MiniMax · Open · Large(230B) · 컨텍스트 205k · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.3 · 출력 $1.2 · 혼합 $0.39/1M · 89.0 t/s · TTFT 1.56s · 205k ctx` · 가성비 74.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.5 | +0.1 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.2 | +0.01 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 52.9 | +0.2 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 26.0%×0.5 |
| 에이전트 | 65.8 | +1.05 | 실측 | [[tau2-bench]] 87.0%×1.0, [[terminal-bench]] 26.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.6 | +0.84 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 68.4 | +1.22 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
