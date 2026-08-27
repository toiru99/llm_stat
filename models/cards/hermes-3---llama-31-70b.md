---
type: Model
title: Hermes 3 - Llama-3.1 70B
creator: Nous Research
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.7
output_speed_tps: 35.0
context_window: 128000
status: past
size_class: Medium
params_b: 70.6
is_reasoning: false
radar:
  knowledge: { s: 22.5, z: -0.9, r: 36.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.4, z: -0.75, r: 38.8, estimated: false }  # 추론
  coding: { s: 38.3, z: -0.43, r: 43.6, estimated: false }  # 코딩
  agentic: { s: 17.0, z: -0.78, r: 38.3, estimated: true }  # 에이전트
  trust: { s: 23.0, z: -0.24, r: 46.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.0, z: -1.16, r: 32.5, estimated: true }  # 긴문맥
  instruction: { s: 27.6, z: -1.09, r: 33.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hermes 3 - Llama-3.1 70B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Hermes 3 - Llama-3.1 70B

Nous Research · Open · Medium(70.6B) · 컨텍스트 128k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.7 · 출력 $0.7 · 혼합 $0.7/1M · 35.0 t/s · TTFT 2.22s · 128k ctx` · 가성비 7.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.5 | -0.9 | 실측 | [[gpqa-diamond]] 40.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.8 | -0.75 | 실측 | [[gpqa-diamond]] 40.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 43.6 | -0.43 | 실측 | [[scicode]] 23.0%×1.0 |
| 에이전트 | 38.3 | -0.78 | 추정 | (추정) |
| 신뢰성 | 46.4 | -0.24 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.5 | -1.16 | 추정 | (추정) |
| 지시 따르기 | 33.6 | -1.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
