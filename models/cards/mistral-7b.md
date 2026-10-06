---
type: Model
title: Mistral 7B
creator: Mistral
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.155
output_speed_tps: None
context_window: 8189
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 11.3, z: -1.45, r: 28.3, estimated: false }  # 전문 지식
  reasoning: { s: 5.3, z: -1.42, r: 28.7, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.25, r: 31.3, estimated: true }  # 코딩
  agentic: { s: 0.0, z: -1.49, r: 27.7, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.42, r: 43.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.56, r: 26.6, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.79, r: 23.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# Mistral 7B

Mistral · Open · Small · 컨텍스트 8k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.2 · 혼합 $0.155/1M · None t/s · TTFT Nones · 8k ctx` · 가성비 32.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.3 | -1.45 | 실측 | [[aa-omniscience]] 9.0%×1.0, [[gpqa-diamond]] 18.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 28.7 | -1.42 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 18.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 31.3 | -1.25 | 추정 | (추정) |
| 에이전트 | 27.7 | -1.49 | 실측 | [[tau2-bench]] 0.0%×1.0 |
| 신뢰성 | 43.7 | -0.42 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.6 | -1.56 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 23.1 | -1.79 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
