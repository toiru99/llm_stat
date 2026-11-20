---
type: Model
title: Mixtral 8x7B
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 0.475
output_speed_tps: 61.4785691773427
context_window: 32768
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 14.9, z: -1.56, r: 26.6, estimated: false }  # 전문 지식
  reasoning: { s: 13.7, z: -1.08, r: 33.8, estimated: false }  # 추론
  coding: { s: 0.4, z: -1.35, r: 29.8, estimated: true }  # 코딩
  agentic: { s: 0.7, z: -1.53, r: 27.1, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 1.4, z: -1.55, r: 26.8, estimated: true }  # 긴문맥
  instruction: { s: 23.6, z: -1.27, r: 31.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mixtral 8x7B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Mixtral 8x7B

Mistral · Open · Medium · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.45 · 출력 $0.7 · 혼합 $0.475/1M · 61.4785691773427 t/s · TTFT 0.698239937738919s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 26.6 | -1.56 | 실측 | [[gpqa-diamond]] 29.1919191919192%×0.4, [[humanitys-last-exam]] 4.68%×0.3 |
| 추론 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 29.1919191919192%×1.0, [[humanitys-last-exam]] 4.68%×1.0 |
| 코딩 | 29.8 | -1.35 | 추정 | (추정) |
| 에이전트 | 27.1 | -1.53 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.8 | -1.55 | 추정 | (추정) |
| 지시 따르기 | 31.0 | -1.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
