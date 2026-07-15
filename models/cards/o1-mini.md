---
type: Model
title: o1-mini
creator: OpenAI
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 37.3, z: -0.15, r: 47.7, estimated: false }  # 전문 지식
  reasoning: { s: 33.6, z: 0.01, r: 50.1, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 44.2, z: 0.32, r: 54.7, estimated: true }  # 에이전트
  trust: { s: 12.5, z: -0.72, r: 39.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.4, z: 0.41, r: 56.2, estimated: true }  # 긴문맥
  instruction: { s: 60.0, z: 0.32, r: 54.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o1-mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-15
timestamp: 2026-07-15T00:00:00Z
---

# o1-mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.7 | -0.15 | 실측 | [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 50.1 | +0.01 | 실측 | [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 54.7 | +0.32 | 추정 | (추정) |
| 신뢰성 | 39.2 | -0.72 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.2 | +0.41 | 추정 | (추정) |
| 지시 따르기 | 54.8 | +0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
