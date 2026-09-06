---
type: Model
title: LFM 40B
creator: Liquid AI
license: Proprietary
intelligence_index: 1.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Medium
params_b: 40.3
is_reasoning: false
radar:
  knowledge: { s: 18.2, z: -1.09, r: 33.6, estimated: false }  # 전문 지식
  reasoning: { s: 16.8, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.07, r: 33.9, estimated: true }  # 코딩
  agentic: { s: 4.5, z: -1.26, r: 31.1, estimated: true }  # 에이전트
  trust: { s: 19.9, z: -0.22, r: 46.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 8.5, z: -1.25, r: 31.3, estimated: true }  # 긴문맥
  instruction: { s: 28.7, z: -1.0, r: 35.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM 40B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# LFM 40B

Liquid AI · Proprietary · Medium(40.3B) · 컨텍스트 32k · 종합지능 **1.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.6 | -1.09 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 33.9 | -1.07 | 추정 | (추정) |
| 에이전트 | 31.1 | -1.26 | 추정 | (추정) |
| 신뢰성 | 46.7 | -0.22 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.3 | -1.25 | 추정 | (추정) |
| 지시 따르기 | 35.0 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
