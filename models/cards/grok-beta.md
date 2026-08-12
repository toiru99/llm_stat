---
type: Model
title: Grok Beta
creator: SpaceXAI
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.6, z: -0.64, r: 40.4, estimated: false }  # 전문 지식
  reasoning: { s: 24.8, z: -0.5, r: 42.5, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.11, r: 51.6, estimated: false }  # 코딩
  agentic: { s: 42.4, z: 0.26, r: 53.9, estimated: true }  # 에이전트
  trust: { s: 40.3, z: 0.64, r: 59.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 39.3, z: -0.31, r: 45.4, estimated: true }  # 긴문맥
  instruction: { s: 54.1, z: 0.02, r: 50.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-12
timestamp: 2026-08-12T00:00:00Z
---

# Grok Beta

SpaceXAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.4 | -0.64 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.5 | -0.5 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 51.6 | +0.11 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 53.9 | +0.26 | 추정 | (추정) |
| 신뢰성 | 59.7 | +0.64 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.4 | -0.31 | 추정 | (추정) |
| 지시 따르기 | 50.3 | +0.02 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
