---
type: Model
title: Ministral 3 8B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0555
output_speed_tps: 86.42316635910795
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.5, z: -1.0, r: 35.0, estimated: false }  # 전문 지식
  reasoning: { s: 15.8, z: -0.97, r: 35.5, estimated: false }  # 추론
  coding: { s: 17.4, z: -0.76, r: 38.6, estimated: false }  # 코딩
  agentic: { s: 17.0, z: -0.96, r: 35.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 42.1, z: -1.49, r: 27.6, estimated: false }  # 멀티모달
  long_context: { s: 28.9, z: -0.72, r: 39.2, estimated: false }  # 긴문맥
  instruction: { s: 23.9, z: -1.25, r: 31.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Ministral 3 8B

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.0555/1M · 86.42316635910795 t/s · TTFT 1.829911643536686s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.0 | -1.0 | 실측 | [[gpqa-diamond]] 47.0707070707071%×0.4, [[humanitys-last-exam]] 4.2632066728452305%×0.3 |
| 추론 | 35.5 | -0.97 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 47.0707070707071%×1.0, [[humanitys-last-exam]] 4.2632066728452305%×1.0 |
| 코딩 | 38.6 | -0.76 | 실측 | [[scicode]] 20.717592592592602%×1.0, [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 35.7 | -0.96 | 실측 | [[gdpval]] 220.76%×1.0, [[tau2-bench]] 26.6081871345029%×1.0, [[tau3-banking]] 3.71134020618557%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 27.6 | -1.49 | 실측 | [[mmmu-pro]] 45.9537572254335%×1.0 |
| 긴문맥 | 39.2 | -0.72 | 실측 | [[aa-lcr]] 25.6666666666667%×1.0 |
| 지시 따르기 | 31.3 | -1.25 | 실측 | [[ifbench]] 29.115646258503403%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
