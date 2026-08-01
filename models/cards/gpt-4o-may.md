---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: 9.0
price_blended_usd_1m: None
output_speed_tps: 76.0
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 30.9, z: -0.49, r: 42.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.5, z: -0.35, r: 44.7, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.19, r: 52.9, estimated: false }  # 코딩
  agentic: { s: 37.5, z: 0.04, r: 50.6, estimated: true }  # 에이전트
  trust: { s: 38.6, z: 0.5, r: 57.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 31.8, z: -0.52, r: 42.2, estimated: true }  # 긴문맥
  instruction: { s: 46.5, z: -0.27, r: 45.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-01
timestamp: 2026-08-01T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **9.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $None/1M · 76.0 t/s · TTFT 1.11s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.7 | -0.49 | 실측 | [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 44.7 | -0.35 | 실측 | [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 52.9 | +0.19 | 실측 | [[scicode]] 31.0%×1.0 |
| 에이전트 | 50.6 | +0.04 | 추정 | (추정) |
| 신뢰성 | 57.5 | +0.5 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.2 | -0.52 | 추정 | (추정) |
| 지시 따르기 | 45.9 | -0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
