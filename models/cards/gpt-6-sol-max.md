---
type: Model
title: GPT-6 Sol (max)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 104.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.27, r: 69.1, estimated: false }  # 전문 지식
  reasoning: { s: 78.3, z: 1.47, r: 72.1, estimated: false }  # 추론
  coding: { s: 85.0, z: 1.61, r: 74.1, estimated: false }  # 코딩
  agentic: { s: 84.3, z: 1.72, r: 75.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.05, r: 65.7, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.26, r: 69.0, estimated: false }  # 긴문맥
  instruction: { s: 81.9, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Sol (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# GPT-6 Sol (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 104.0 t/s · TTFT 97.24s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.1 | +1.27 | 실측 | [[humanitys-last-exam]] 48.0%×0.3 |
| 추론 | 72.1 | +1.47 | 실측 | [[humanitys-last-exam]] 48.0%×1.0 |
| 코딩 | 74.1 | +1.61 | 실측 | [[scicode]] 58.0%×1.0 |
| 에이전트 | 75.8 | +1.72 | 실측 | [[gdpval]] 1516.0%×1.0, [[itbench]] 49.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 65.7 | +1.05 | 실측 | [[mmmu-pro]] 83.0%×1.0 |
| 긴문맥 | 69.0 | +1.26 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
