---
type: Model
title: GPT-5.6 Luna (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 64.7, z: 0.85, r: 62.7, estimated: false }  # 전문 지식
  reasoning: { s: 60.9, z: 0.86, r: 62.8, estimated: false }  # 추론
  coding: { s: 65.6, z: 0.93, r: 63.9, estimated: false }  # 코딩
  agentic: { s: 47.6, z: 0.43, r: 56.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.55, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 84.6, z: 0.94, r: 64.1, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.41, r: 71.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5.6 Luna (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.7 | +0.85 | 실측 | [[gpqa-diamond]] 85.9%×0.4, [[humanitys-last-exam]] 25.8%×0.3 |
| 추론 | 62.8 | +0.86 | 실측 | [[gpqa-diamond]] 85.9%×1.0, [[humanitys-last-exam]] 25.8%×1.0 |
| 코딩 | 63.9 | +0.93 | 실측 | [[scicode]] 46.8%×1.0 |
| 에이전트 | 56.4 | +0.43 | 실측 | [[gdpval]] 1138.0%×1.0, [[tau3-banking]] 17.7%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.3 | +0.55 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 64.1 | +0.94 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 71.2 | +1.41 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
