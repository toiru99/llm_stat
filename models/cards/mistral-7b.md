---
type: Model
title: Mistral 7B
creator: Mistral
license: Open
intelligence_index: 2.0
price_blended_usd_1m: None
output_speed_tps: 113.0
context_window: 8189
status: past
size_class: Small
params_b: 7
is_reasoning: false
radar:
  knowledge: { s: 10.1, z: -1.47, r: 28.0, estimated: false }  # 전문 지식
  reasoning: { s: 5.1, z: -1.48, r: 27.8, estimated: false }  # 추론
  coding: { s: 3.3, z: -1.82, r: 22.7, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.42, r: 28.8, estimated: false }  # 에이전트
  trust: { s: 23.0, z: -0.24, r: 46.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.47, r: 28.0, estimated: false }  # 긴문맥
  instruction: { s: 11.3, z: -1.73, r: 24.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral 7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# Mistral 7B

Mistral · Open · Small(7B) · 컨텍스트 8k · 종합지능 **2.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.25 · 출력 $0.25 · 혼합 $None/1M · 113.0 t/s · TTFT 0.77s · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 28.0 | -1.47 | 실측 | [[aa-omniscience]] 8.0%×1.0, [[gpqa-diamond]] 18.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 27.8 | -1.48 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 18.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 22.7 | -1.82 | 실측 | [[scicode]] 2.0%×1.0 |
| 에이전트 | 28.8 | -1.42 | 실측 | [[tau2-bench]] 0.0%×1.0 |
| 신뢰성 | 46.4 | -0.24 | 실측 | [[aa-omniscience]] 21.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 28.0 | -1.47 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 24.1 | -1.73 | 실측 | [[ifbench]] 20.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
