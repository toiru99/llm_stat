---
type: Model
title: GPT-5.6 Luna (high)
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
  knowledge: { s: 75.4, z: 1.15, r: 67.3, estimated: false }  # 전문 지식
  reasoning: { s: 72.7, z: 1.22, r: 68.3, estimated: false }  # 추론
  coding: { s: 74.5, z: 1.24, r: 68.6, estimated: false }  # 코딩
  agentic: { s: 60.3, z: 0.89, r: 63.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.1, z: 0.69, r: 60.4, estimated: false }  # 멀티모달
  long_context: { s: 90.5, z: 1.14, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 80.8, z: 1.18, r: 67.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# GPT-5.6 Luna (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.3 | +1.15 | 실측 | [[gpqa-diamond]] 89.2%×0.4, [[humanitys-last-exam]] 33.4%×0.3 |
| 추론 | 68.3 | +1.22 | 실측 | [[gpqa-diamond]] 89.2%×1.0, [[humanitys-last-exam]] 33.4%×1.0 |
| 코딩 | 68.6 | +1.24 | 실측 | [[scicode]] 51.6%×1.0 |
| 에이전트 | 63.4 | +0.89 | 실측 | [[gdpval]] 1339.0%×1.0, [[tau3-banking]] 25.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.4 | +0.69 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 67.0 | +1.14 | 실측 | [[aa-lcr]] 80.3%×1.0 |
| 지시 따르기 | 67.7 | +1.18 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
