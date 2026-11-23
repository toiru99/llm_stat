---
type: Model
title: Mistral Small 3.1
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.116
output_speed_tps: None
context_window: 128000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.4, z: -1.06, r: 34.1, estimated: false }  # 전문 지식
  reasoning: { s: 15.2, z: -1.01, r: 34.9, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.45, r: 43.2, estimated: false }  # 코딩
  agentic: { s: 21.4, z: -0.81, r: 37.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.2, z: -0.85, r: 37.3, estimated: false }  # 긴문맥
  instruction: { s: 25.0, z: -1.21, r: 31.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small 3.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Mistral Small 3.1

Mistral · Open · Small · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $0.11 · 출력 $0.17 · 혼합 $0.116/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.1 | -1.06 | 실측 | [[gpqa-diamond]] 45.3535353535354%×0.4, [[humanitys-last-exam]] 4.30954587581094%×0.3 |
| 추론 | 34.9 | -1.01 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 45.3535353535354%×1.0, [[humanitys-last-exam]] 4.30954587581094%×1.0 |
| 코딩 | 43.2 | -0.45 | 실측 | [[scicode]] 27.7777777777778%×1.0, [[terminal-bench]] 7.57575757575758%×0.5 |
| 에이전트 | 37.8 | -0.81 | 실측 | [[gdpval]] 383.79%×1.0, [[tau2-bench]] 25.1461988304094%×1.0, [[tau3-banking]] 7.42268041237113%×1.0, [[terminal-bench]] 7.57575757575758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.3 | -0.85 | 실측 | [[aa-lcr]] 22.3333333333333%×1.0 |
| 지시 따르기 | 31.9 | -1.21 | 실측 | [[ifbench]] 29.9319727891156%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
