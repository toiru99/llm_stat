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
  knowledge: { s: 27.3, z: -0.67, r: 39.9, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.05, r: 50.7, estimated: false }  # 코딩
  agentic: { s: 37.4, z: 0.01, r: 50.1, estimated: true }  # 에이전트
  trust: { s: 39.6, z: 0.45, r: 56.8, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.5, z: -0.37, r: 44.4, estimated: true }  # 긴문맥
  instruction: { s: 48.0, z: -0.26, r: 46.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# Grok Beta

SpaceXAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.9 | -0.67 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 50.7 | +0.05 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 50.1 | +0.01 | 추정 | (추정) |
| 신뢰성 | 56.8 | +0.45 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.4 | -0.37 | 추정 | (추정) |
| 지시 따르기 | 46.1 | -0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
