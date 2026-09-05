---
type: Model
title: Mistral Small (Sep)
creator: Mistral
license: Open
intelligence_index: 1.0
price_blended_usd_1m: 0.24
output_speed_tps: 141.0
context_window: 32800
status: past
size_class: Small
params_b: 22
is_reasoning: false
radar:
  knowledge: { s: 20.8, z: -0.97, r: 35.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.9, z: -0.78, r: 38.3, estimated: false }  # 추론
  coding: { s: 10.9, z: -0.74, r: 38.9, estimated: true }  # 코딩
  agentic: { s: 14.8, z: -0.87, r: 37.0, estimated: true }  # 에이전트
  trust: { s: 21.9, z: -0.12, r: 48.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 16.4, z: -1.0, r: 34.9, estimated: true }  # 긴문맥
  instruction: { s: 31.9, z: -0.86, r: 37.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Mistral Small (Sep)

Mistral · Open · Small(22B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 141.0 t/s · TTFT 0.72s · 32k ctx` · 가성비 4.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.97 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.3 | -0.78 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.9 | -0.74 | 추정 | (추정) |
| 에이전트 | 37.0 | -0.87 | 추정 | (추정) |
| 신뢰성 | 48.2 | -0.12 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.9 | -1.0 | 추정 | (추정) |
| 지시 따르기 | 37.1 | -0.86 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
