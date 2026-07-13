---
type: Model
title: GPT-4o (ChatGPT)
creator: OpenAI
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.4, z: -0.48, r: 42.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.3, z: -0.32, r: 45.1, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.38, r: 55.7, estimated: false }  # 코딩
  agentic: { s: 45.1, z: 0.35, r: 55.2, estimated: true }  # 에이전트
  trust: { s: 27.8, z: -0.01, r: 49.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 69.7, z: 0.63, r: 59.5, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.16, r: 52.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (ChatGPT)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# GPT-4o (ChatGPT)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.7 | -0.48 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 45.1 | -0.32 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 55.7 | +0.38 | 실측 | [[scicode]] 33.0%×1.0 |
| 에이전트 | 55.2 | +0.35 | 추정 | (추정) |
| 신뢰성 | 49.9 | -0.01 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.5 | +0.63 | 실측 | [[aa-lcr]] 53.0%×1.0 |
| 지시 따르기 | 52.4 | +0.16 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
