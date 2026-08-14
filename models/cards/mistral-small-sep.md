---
type: Model
title: Mistral Small (Sep)
creator: Mistral
license: Open
intelligence_index: 4.0
price_blended_usd_1m: 0.24
output_speed_tps: 144.0
context_window: 32800
status: past
size_class: Small
params_b: 22
is_reasoning: false
radar:
  knowledge: { s: 21.2, z: -0.95, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.79, r: 38.2, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.88, r: 36.8, estimated: false }  # 코딩
  agentic: { s: 7.8, z: -1.13, r: 33.0, estimated: true }  # 에이전트
  trust: { s: 24.5, z: -0.11, r: 48.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.0, z: -0.73, r: 39.0, estimated: true }  # 긴문맥
  instruction: { s: 32.4, z: -0.89, r: 36.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# Mistral Small (Sep)

Mistral · Open · Small(22B) · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 전문 지식, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $0.24/1M · 144.0 t/s · TTFT 0.94s · 32k ctx` · 가성비 16.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.95 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.2 | -0.79 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.8 | -0.88 | 실측 | [[scicode]] 16.0%×1.0 |
| 에이전트 | 33.0 | -1.13 | 추정 | (추정) |
| 신뢰성 | 48.3 | -0.11 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.0 | -0.73 | 추정 | (추정) |
| 지시 따르기 | 36.7 | -0.89 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
