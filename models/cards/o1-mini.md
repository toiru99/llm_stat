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
  knowledge: { s: 36.0, z: -0.25, r: 46.3, estimated: false }  # 전문 지식
  reasoning: { s: 32.2, z: -0.15, r: 47.7, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.21, r: 53.2, estimated: false }  # 코딩
  agentic: { s: 37.0, z: 0.02, r: 50.2, estimated: true }  # 에이전트
  trust: { s: 31.9, z: 0.21, r: 53.2, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.5, z: -0.03, r: 49.6, estimated: true }  # 긴문맥
  instruction: { s: 55.8, z: 0.06, r: 51.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o1-mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# o1-mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.3 | -0.25 | 실측 | [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 47.7 | -0.15 | 실측 | [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 53.2 | +0.21 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 50.2 | +0.02 | 추정 | (추정) |
| 신뢰성 | 53.2 | +0.21 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.6 | -0.03 | 추정 | (추정) |
| 지시 따르기 | 51.0 | +0.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
