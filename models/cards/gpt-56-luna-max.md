---
type: Model
title: GPT-5.6 Luna (max)
creator: OpenAI
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 0.174
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.2, z: 1.4, r: 71.0, estimated: false }  # 전문 지식
  reasoning: { s: 62.1, z: 0.92, r: 63.7, estimated: false }  # 추론
  coding: { s: 76.8, z: 1.3, r: 69.5, estimated: false }  # 코딩
  agentic: { s: 71.5, z: 1.24, r: 68.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.5, z: 0.76, r: 61.4, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 75.3, z: 0.95, r: 64.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# GPT-5.6 Luna (max)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 137.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.0 | +1.4 | 실측 | [[gpqa-diamond]] 91.1%×0.4, [[humanitys-last-exam]] 39.5%×0.3 |
| 추론 | 63.7 | +0.92 | 실측 | [[critpt]] 30.5%×1.0, [[gpqa-diamond]] 91.1%×1.0, [[humanitys-last-exam]] 39.5%×1.0 |
| 코딩 | 69.5 | +1.3 | 실측 | [[scicode]] 53.6%×1.0 |
| 에이전트 | 68.5 | +1.24 | 실측 | [[apex-agents]] 35.8%×1.0, [[gdpval]] 1468.0%×1.0, [[itbench]] 40.3%×1.0, [[tau3-banking]] 31.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.4 | +0.76 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 83.7%×1.0 |
| 지시 따르기 | 64.3 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
