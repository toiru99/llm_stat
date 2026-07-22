---
type: Model
title: Mistral Small (Sep)
creator: Mistral
license: Open
intelligence_index: 5.0
price_blended_usd_1m: None
output_speed_tps: 149.0
context_window: 32800
status: past
size_class: Small
params_b: 22
is_reasoning: false
radar:
  knowledge: { s: 21.5, z: -0.92, r: 36.2, estimated: false }  # 전문 지식
  reasoning: { s: 19.6, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.83, r: 37.5, estimated: false }  # 코딩
  agentic: { s: 7.3, z: -1.12, r: 33.2, estimated: true }  # 에이전트
  trust: { s: 19.1, z: -0.41, r: 43.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.0, z: -0.93, r: 36.1, estimated: true }  # 긴문맥
  instruction: { s: 31.7, z: -0.88, r: 36.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Sep)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# Mistral Small (Sep)

Mistral · Open · Small(22B) · 컨텍스트 32k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $0.6 · 혼합 $None/1M · 149.0 t/s · TTFT 0.79s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.2 | -0.92 | 실측 | [[gpqa-diamond]] 38.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[gpqa-diamond]] 38.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 37.5 | -0.83 | 실측 | [[scicode]] 16.0%×1.0 |
| 에이전트 | 33.2 | -1.12 | 추정 | (추정) |
| 신뢰성 | 43.8 | -0.41 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.1 | -0.93 | 추정 | (추정) |
| 지시 따르기 | 36.9 | -0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
