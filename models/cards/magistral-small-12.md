---
type: Model
title: Magistral Small 1.2
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.6
output_speed_tps: 106.0
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 40.8, z: -0.38, r: 44.3, estimated: false }  # 전문 지식
  reasoning: { s: 36.7, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 7.6, z: -0.99, r: 35.1, estimated: false }  # 코딩
  agentic: { s: 6.0, z: -0.97, r: 35.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.8, z: -0.86, r: 37.1, estimated: false }  # 멀티모달
  long_context: { s: 21.3, z: -0.93, r: 36.1, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Magistral Small 1.2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Magistral Small 1.2

Mistral · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.5 · 출력 $1.5 · 혼합 $0.6/1M · 106.0 t/s · TTFT 1.12s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.3 | -0.38 | 실측 | [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 35.1 | -0.99 | 실측 | [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.5 | -0.97 | 실측 | [[gdpval]] 12.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.1 | -0.86 | 실측 | [[mmmu-pro]] 55.0%×1.0 |
| 긴문맥 | 36.1 | -0.93 | 실측 | [[aa-lcr]] 19.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
