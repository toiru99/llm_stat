---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: 7.0
price_blended_usd_1m: 6
output_speed_tps: 137.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 29.3, z: -0.59, r: 41.2, estimated: false }  # 전문 지식
  reasoning: { s: 25.8, z: -0.46, r: 43.1, estimated: false }  # 추론
  coding: { s: 12.4, z: -0.79, r: 38.2, estimated: true }  # 코딩
  agentic: { s: 26.7, z: -0.43, r: 43.6, estimated: true }  # 에이전트
  trust: { s: 16.7, z: -0.42, r: 43.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.9, z: -0.09, r: 48.7, estimated: true }  # 긴문맥
  instruction: { s: 47.3, z: -0.26, r: 46.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-28
timestamp: 2026-09-28T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **7.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $6/1M · 137.0 t/s · TTFT 1.02s · 128k ctx` · 가성비 1.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.2 | -0.59 | 실측 | [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 2.0%×0.3 |
| 추론 | 43.1 | -0.46 | 실측 | [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 2.0%×1.0 |
| 코딩 | 38.2 | -0.79 | 추정 | (추정) |
| 에이전트 | 43.6 | -0.43 | 추정 | (추정) |
| 신뢰성 | 43.7 | -0.42 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 48.7 | -0.09 | 추정 | (추정) |
| 지시 따르기 | 46.1 | -0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
