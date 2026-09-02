---
type: Model
title: Claude 2.1
creator: Anthropic
license: Proprietary
intelligence_index: 4.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 17.0, z: -1.16, r: 32.6, estimated: false }  # 전문 지식
  reasoning: { s: 15.5, z: -0.95, r: 35.8, estimated: false }  # 추론
  coding: { s: 29.0, z: -0.75, r: 38.8, estimated: false }  # 코딩
  agentic: { s: 21.7, z: -0.6, r: 41.0, estimated: true }  # 에이전트
  trust: { s: 27.6, z: 0.16, r: 52.4, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.6, z: -0.89, r: 36.6, estimated: true }  # 긴문맥
  instruction: { s: 30.9, z: -0.91, r: 36.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 2.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Claude 2.1

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **4.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 32.6 | -1.16 | 실측 | [[gpqa-diamond]] 32.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 35.8 | -0.95 | 실측 | [[gpqa-diamond]] 32.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 38.8 | -0.75 | 실측 | [[scicode]] 18.0%×1.0 |
| 에이전트 | 41.0 | -0.6 | 추정 | (추정) |
| 신뢰성 | 52.4 | +0.16 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 36.6 | -0.89 | 추정 | (추정) |
| 지시 따르기 | 36.3 | -0.91 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
