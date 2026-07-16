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
  knowledge: { s: 28.5, z: -0.58, r: 41.3, estimated: false }  # 전문 지식
  reasoning: { s: 25.9, z: -0.41, r: 43.9, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.16, r: 52.4, estimated: false }  # 코딩
  agentic: { s: 41.7, z: 0.22, r: 53.2, estimated: true }  # 에이전트
  trust: { s: 51.0, z: 1.1, r: 66.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 25.3, z: -0.69, r: 39.7, estimated: true }  # 긴문맥
  instruction: { s: 34.1, z: -0.75, r: 38.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Beta
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-16
timestamp: 2026-07-16T00:00:00Z
---

# Grok Beta

SpaceXAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.3 | -0.58 | 실측 | [[gpqa-diamond]] 47.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 43.9 | -0.41 | 실측 | [[gpqa-diamond]] 47.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 52.4 | +0.16 | 실측 | [[scicode]] 30.0%×1.0 |
| 에이전트 | 53.2 | +0.22 | 추정 | (추정) |
| 신뢰성 | 66.5 | +1.1 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.69 | 추정 | (추정) |
| 지시 따르기 | 38.8 | -0.75 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
