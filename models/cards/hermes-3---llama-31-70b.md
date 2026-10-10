---
type: Model
title: Hermes 3 - Llama-3.1 70B
creator: Nous Research
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.7
output_speed_tps: 31.0
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.1, z: -0.95, r: 35.7, estimated: false }  # 전문 지식
  reasoning: { s: 19.9, z: -0.76, r: 38.6, estimated: false }  # 추론
  coding: { s: 7.5, z: -1.0, r: 35.0, estimated: true }  # 코딩
  agentic: { s: 12.2, z: -1.03, r: 34.6, estimated: true }  # 에이전트
  trust: { s: 31.1, z: 0.2, r: 53.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.8, z: -1.18, r: 32.2, estimated: true }  # 긴문맥
  instruction: { s: 23.7, z: -1.28, r: 30.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 3 - Llama-3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# Hermes 3 - Llama-3.1 70B

Nous Research · Open · Medium · 컨텍스트 128k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.7 · 출력 $0.7 · 혼합 $0.7/1M · 31.0 t/s · TTFT 2.12s · 128k ctx` · 가성비 8.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.7 | -0.95 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.6 | -0.76 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 35.0 | -1.0 | 추정 | (추정) |
| 에이전트 | 34.6 | -1.03 | 추정 | (추정) |
| 신뢰성 | 53.0 | +0.2 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.2 | -1.18 | 추정 | (추정) |
| 지시 따르기 | 30.7 | -1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
