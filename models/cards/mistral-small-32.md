---
type: Model
title: Mistral Small 3.2
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0875
output_speed_tps: 56.35400382737625
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.8, z: -0.89, r: 36.7, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.9, r: 36.5, estimated: false }  # 추론
  coding: { s: 27.2, z: -0.43, r: 43.6, estimated: false }  # 코딩
  agentic: { s: 15.3, z: -1.01, r: 34.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 44.8, z: -1.35, r: 29.7, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.9, r: 36.5, estimated: false }  # 긴문맥
  instruction: { s: 30.0, z: -0.99, r: 35.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Mistral Small 3.2

Mistral · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.075 · 출력 $0.2 · 혼합 $0.0875/1M · 56.35400382737625 t/s · TTFT 2.491362031800026s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.7 | -0.89 | 실측 | [[gpqa-diamond]] 50.5050505050505%×0.4, [[humanitys-last-exam]] 4.30954587581094%×0.3 |
| 추론 | 36.5 | -0.9 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 50.5050505050505%×1.0, [[humanitys-last-exam]] 4.30954587581094%×1.0 |
| 코딩 | 43.6 | -0.43 | 실측 | [[scicode]] 28.587962962962997%×1.0, [[terminal-bench]] 6.81818181818182%×0.5 |
| 에이전트 | 34.8 | -1.01 | 실측 | [[gdpval]] -188.15%×1.0, [[tau2-bench]] 29.5321637426901%×1.0, [[tau3-banking]] 6.18556701030928%×1.0, [[terminal-bench]] 6.81818181818182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 29.7 | -1.35 | 실측 | [[mmmu-pro]] 47.9768786127168%×1.0 |
| 긴문맥 | 36.5 | -0.9 | 실측 | [[aa-lcr]] 20.3333333333333%×1.0 |
| 지시 따르기 | 35.2 | -0.99 | 실측 | [[ifbench]] 33.469387755102%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
