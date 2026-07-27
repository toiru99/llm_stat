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
  knowledge: { s: 37.3, z: -0.18, r: 47.3, estimated: false }  # 전문 지식
  reasoning: { s: 33.6, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 53.3, z: 0.27, r: 54.1, estimated: false }  # 코딩
  agentic: { s: 36.7, z: 0.01, r: 50.2, estimated: true }  # 에이전트
  trust: { s: 18.4, z: -0.46, r: 43.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 55.6, z: 0.18, r: 52.7, estimated: true }  # 긴문맥
  instruction: { s: 55.2, z: 0.09, r: 51.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o1-mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# o1-mini

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 전문 지식, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.3 | -0.18 | 실측 | [[gpqa-diamond]] 60.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[gpqa-diamond]] 60.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 54.1 | +0.27 | 실측 | [[scicode]] 32.0%×1.0 |
| 에이전트 | 50.2 | +0.01 | 추정 | (추정) |
| 신뢰성 | 43.1 | -0.46 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 52.7 | +0.18 | 추정 | (추정) |
| 지시 따르기 | 51.3 | +0.09 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
