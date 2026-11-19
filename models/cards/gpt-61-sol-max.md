---
type: Model
title: GPT-6.1 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 54.6087338138148
price_blended_usd_1m: 1.47
output_speed_tps: 47.9790025801104
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 70.8, z: 1.13, r: 67.0, estimated: false }  # 전문 지식
  reasoning: { s: 79.8, z: 2.18, r: 82.7, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.28, r: 69.2, estimated: false }  # 코딩
  agentic: { s: 88.6, z: 1.51, r: 72.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.3, z: 1.22, r: 68.3, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 80.4, z: 1.11, r: 66.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6.1 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# GPT-6.1 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.6087338138148** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 전문 지식, 지시 따르기

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.47/1M · 47.9790025801104 t/s · TTFT 134.526283601035s · 1M ctx` · 가성비 37.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.0 | +1.13 | 실측 | [[humanitys-last-exam]] 52.919369786839695%×0.3 |
| 추론 | 82.7 | +2.18 | 실측 | [[critpt]] 31.7142857142857%×1.0, [[humanitys-last-exam]] 52.919369786839695%×1.0 |
| 코딩 | 69.2 | +1.28 | 실측 | [[scicode]] 54.1666666666667%×1.0 |
| 에이전트 | 72.7 | +1.51 | 실측 | [[gdpval]] 1607.47%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 68.3 | +1.22 | 실측 | [[mmmu-pro]] 85.9537572254335%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 66.6 | +1.11 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
