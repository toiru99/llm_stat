---
type: Model
title: Mistral Small 3.1
creator: Mistral
license: Open
intelligence_index: 15.0
price_blended_usd_1m: 0.12
output_speed_tps: 151.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 24.9, z: -0.75, r: 38.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.5, z: -0.9, r: 36.5, estimated: false }  # 추론
  coding: { s: 34.0, z: -0.51, r: 42.4, estimated: false }  # 코딩
  agentic: { s: 16.6, z: -0.76, r: 38.6, estimated: false }  # 에이전트
  trust: { s: 25.9, z: -0.1, r: 48.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.3, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 25.4, z: -1.11, r: 33.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# Mistral Small 3.1

Mistral · Open · Unknown · 컨텍스트 128k · 종합지능 **15.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 151.0 t/s · TTFT 0.68s · 128k ctx` · 가성비 125.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 45.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.5 | -0.9 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 42.4 | -0.51 | 실측 | [[scicode]] 27.0%×1.0, [[terminal-bench]] 8.0%×0.5 |
| 에이전트 | 38.6 | -0.76 | 실측 | [[gdpval]] 5.0%×1.0, [[tau2-bench]] 25.0%×1.0, [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 8.0%×1.0 |
| 신뢰성 | 48.6 | -0.1 | 실측 | [[aa-omniscience]] 23.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 20.0%×1.0 |
| 지시 따르기 | 33.3 | -1.11 | 실측 | [[ifbench]] 30.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
