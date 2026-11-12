---
type: Model
title: Ministral 3 3B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.037
output_speed_tps: None
context_window: 256000
status: current
size_class: Tiny
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 19.7, z: -1.31, r: 30.3, estimated: false }  # 전문 지식
  reasoning: { s: 18.0, z: -1.23, r: 31.5, estimated: false }  # 추론
  coding: { s: 9.2, z: -0.95, r: 35.7, estimated: false }  # 코딩
  agentic: { s: 3.6, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 31.1, z: -2.04, r: 19.4, estimated: false }  # 멀티모달
  long_context: { s: 19.2, z: -1.01, r: 34.8, estimated: false }  # 긴문맥
  instruction: { s: 20.6, z: -1.38, r: 29.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ministral 3 3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Ministral 3 3B

Mistral · Open · Tiny · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $0.1 · 출력 $0.1 · 혼합 $0.037/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.3 | -1.31 | 실측 | [[gpqa-diamond]] 35.8%×0.4, [[humanitys-last-exam]] 5.4%×0.3 |
| 추론 | 31.5 | -1.23 | 실측 | [[gpqa-diamond]] 35.8%×1.0, [[humanitys-last-exam]] 5.4%×1.0 |
| 코딩 | 35.7 | -0.95 | 실측 | [[scicode]] 15.3%×1.0, [[terminal-bench]] 0.0%×0.5 |
| 에이전트 | 34.1 | -1.06 | 실측 | [[gdpval]] 37.0%×1.0, [[tau3-banking]] 4.7%×1.0, [[terminal-bench]] 0.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 19.4 | -2.04 | 실측 | [[mmmu-pro]] 38.0%×1.0 |
| 긴문맥 | 34.8 | -1.01 | 실측 | [[aa-lcr]] 17.0%×1.0 |
| 지시 따르기 | 29.3 | -1.38 | 실측 | [[ifbench]] 26.8%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
