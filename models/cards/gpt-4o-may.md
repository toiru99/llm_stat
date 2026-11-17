---
type: Model
title: GPT-4o (May)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 6
output_speed_tps: 107.18020238687393
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 28.7, z: -0.89, r: 36.6, estimated: false }  # 전문 지식
  reasoning: { s: 25.2, z: -0.5, r: 42.5, estimated: false }  # 추론
  coding: { s: 24.9, z: -0.5, r: 42.4, estimated: true }  # 코딩
  agentic: { s: 24.4, z: -0.7, r: 39.5, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 30.3, z: -0.68, r: 39.7, estimated: true }  # 긴문맥
  instruction: { s: 29.7, z: -1.0, r: 35.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4o (May)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-4o (May)

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $15.0 · 혼합 $6/1M · 107.18020238687393 t/s · TTFT 1.7645976060722477s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.6 | -0.89 | 실측 | [[gpqa-diamond]] 52.6262626262626%×0.4, [[humanitys-last-exam]] 1.76%×0.3 |
| 추론 | 42.5 | -0.5 | 실측 | [[gpqa-diamond]] 52.6262626262626%×1.0, [[humanitys-last-exam]] 1.76%×1.0 |
| 코딩 | 42.4 | -0.5 | 추정 | (추정) |
| 에이전트 | 39.5 | -0.7 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.7 | -0.68 | 추정 | (추정) |
| 지시 따르기 | 35.0 | -1.0 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
