---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: 6.0
output_speed_tps: 78.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.9, z: -0.47, r: 43.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.5, z: -0.32, r: 45.2, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.23, r: 53.4, estimated: false }  # 코딩
  agentic: { s: 37.5, z: 0.05, r: 50.7, estimated: true }  # 에이전트
  trust: { s: 39.5, z: 0.55, r: 58.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.8, z: -0.5, r: 42.6, estimated: true }  # 긴문맥
  instruction: { s: 46.5, z: -0.24, r: 46.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $6.0/1M · 78.0 t/s · TTFT 1.35s · 128k ctx` · 가성비 1.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.0 | -0.47 | 실측 | [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 45.2 | -0.32 | 실측 | [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 53.4 | +0.23 | 실측 | [[scicode]] 31.0%×1.0 |
| 에이전트 | 50.7 | +0.05 | 추정 | (추정) |
| 신뢰성 | 58.3 | +0.55 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.6 | -0.5 | 추정 | (추정) |
| 지시 따르기 | 46.4 | -0.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
