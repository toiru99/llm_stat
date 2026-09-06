---
type: Model
title: GPT-4o (ChatGPT)
creator: OpenAI
license: Proprietary
intelligence_index: 3.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 25.6, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 11.4, z: -0.73, r: 39.1, estimated: true }  # 코딩
  agentic: { s: 31.1, z: -0.24, r: 46.3, estimated: true }  # 에이전트
  trust: { s: 24.1, z: -0.02, r: 49.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.9, z: 0.43, r: 56.4, estimated: false }  # 긴문맥
  instruction: { s: 46.3, z: -0.27, r: 46.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (ChatGPT)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-4o (ChatGPT)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **3.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 신뢰성
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[gpqa-diamond]] 51.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[gpqa-diamond]] 51.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 39.1 | -0.73 | 추정 | (추정) |
| 에이전트 | 46.3 | -0.24 | 추정 | (추정) |
| 신뢰성 | 49.7 | -0.02 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 56.4 | +0.43 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 46.0 | -0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
