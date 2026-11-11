---
type: Model
title: GPT-6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 1.54
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.9, z: 0.82, r: 62.3, estimated: false }  # 전문 지식
  reasoning: { s: 75.4, z: 1.58, r: 73.7, estimated: false }  # 추론
  coding: { s: 83.4, z: 1.53, r: 73.0, estimated: false }  # 코딩
  agentic: { s: 84.5, z: 1.68, r: 75.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 91.9, z: 1.03, r: 65.5, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.24, r: 68.6, estimated: false }  # 긴문맥
  instruction: { s: 81.4, z: 1.23, r: 68.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# GPT-6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 멀티모달, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 28.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.3 | +0.82 | 실측 | [[humanitys-last-exam]] 47.9%×0.3 |
| 추론 | 73.7 | +1.58 | 실측 | [[critpt]] 66.5%×1.0, [[humanitys-last-exam]] 47.9%×1.0 |
| 코딩 | 73.0 | +1.53 | 실측 | [[scicode]] 57.6%×1.0 |
| 에이전트 | 75.3 | +1.68 | 실측 | [[gdpval]] 1516.0%×1.0, [[itbench]] 49.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.5 | +1.03 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 68.6 | +1.24 | 실측 | [[aa-lcr]] 83.7%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
