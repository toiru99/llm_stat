---
type: Model
title: LFM 40B
creator: Liquid AI
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 32000
status: past
size_class: Medium
params_b: 40.3
is_reasoning: false
radar:
  knowledge: { s: 18.6, z: -1.08, r: 33.8, estimated: false }  # 전문 지식
  reasoning: { s: 17.2, z: -0.9, r: 36.6, estimated: false }  # 추론
  coding: { s: 11.7, z: -1.51, r: 27.4, estimated: false }  # 코딩
  agentic: { s: 5.1, z: -1.24, r: 31.4, estimated: true }  # 에이전트
  trust: { s: 18.8, z: -0.4, r: 44.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 8.7, z: -1.26, r: 31.0, estimated: true }  # 긴문맥
  instruction: { s: 22.8, z: -1.29, r: 30.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — LFM 40B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# LFM 40B

Liquid AI · Proprietary · Medium(40.3B) · 컨텍스트 32k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 33.8 | -1.08 | 실측 | [[gpqa-diamond]] 33.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.6 | -0.9 | 실측 | [[gpqa-diamond]] 33.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 27.4 | -1.51 | 실측 | [[scicode]] 7.0%×1.0 |
| 에이전트 | 31.4 | -1.24 | 추정 | (추정) |
| 신뢰성 | 44.1 | -0.4 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.0 | -1.26 | 추정 | (추정) |
| 지시 따르기 | 30.7 | -1.29 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
