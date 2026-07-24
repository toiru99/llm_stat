---
type: Model
title: Mistral Small (Feb)
creator: Mistral
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: 139.0
context_window: 32800
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 16.1, z: -1.18, r: 32.2, estimated: false }  # 전문 지식
  reasoning: { s: 14.8, z: -0.99, r: 35.1, estimated: false }  # 추론
  coding: { s: 21.7, z: -1.04, r: 34.3, estimated: false }  # 코딩
  agentic: { s: 10.6, z: -1.0, r: 35.1, estimated: true }  # 에이전트
  trust: { s: 37.4, z: 0.46, r: 56.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 9.5, z: -1.17, r: 32.4, estimated: true }  # 긴문맥
  instruction: { s: 24.7, z: -1.16, r: 32.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Small (Feb)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-24
timestamp: 2026-07-24T00:00:00Z
---

# Mistral Small (Feb)

Mistral · Proprietary · Unknown · 컨텍스트 32k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $1.0 · 출력 $3.0 · 혼합 $None/1M · 139.0 t/s · TTFT 0.79s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.2 | -1.18 | 실측 | [[gpqa-diamond]] 30.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.1 | -0.99 | 실측 | [[gpqa-diamond]] 30.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.3 | -1.04 | 실측 | [[scicode]] 13.0%×1.0 |
| 에이전트 | 35.1 | -1.0 | 추정 | (추정) |
| 신뢰성 | 56.9 | +0.46 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.4 | -1.17 | 추정 | (추정) |
| 지시 따르기 | 32.6 | -1.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
