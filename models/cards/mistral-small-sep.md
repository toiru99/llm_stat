---
type: Model
title: Mistral Small (Sep)
creator: Mistral
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.24
output_speed_tps: 155.0
context_window: 32800
status: past
size_class: Small
params_b: 22
is_reasoning: false
radar:
  knowledge: { s: 20.8, z: -0.97, r: 35.5, estimated: false }  # 전문 지식
  reasoning: { s: 18.9, z: -0.78, r: 38.3, estimated: false }  # 추론
  coding: { s: 10.9, z: -0.78, r: 38.4, estimated: true }  # 코딩
  agentic: { s: 14.8, z: -0.87, r: 37.0, estimated: true }  # 에이전트
  trust: { s: 23.8, z: -0.05, r: 49.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 13.5, z: -1.09, r: 33.6, estimated: true }  # 긴문맥
  instruction: { s: 28.8, z: -1.0, r: 35.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-09
timestamp: 2026-09-09T00:00:00Z
---

# Mistral Small (Sep)

Mistral · Open · Small(22B) · 컨텍스트 32k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 155.0 t/s · TTFT 0.78s · 32k ctx` · 가성비 25.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.5 | -0.97 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.3 | -0.78 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.4 | -0.78 | 추정 | (추정) |
| 에이전트 | 37.0 | -0.87 | 추정 | (추정) |
| 신뢰성 | 49.3 | -0.05 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 33.6 | -1.09 | 추정 | (추정) |
| 지시 따르기 | 35.0 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
