---
type: Model
title: GPT-6 Astra (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 51.5548393864113
price_blended_usd_1m: 7.7
output_speed_tps: 48.8521868154739
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.9, z: 1.9, r: 78.5, estimated: false }  # 전문 지식
  reasoning: { s: 83.2, z: 2.39, r: 85.8, estimated: false }  # 추론
  coding: { s: 77.7, z: 1.24, r: 68.5, estimated: false }  # 코딩
  agentic: { s: 76.4, z: 1.03, r: 65.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.1, z: 1.16, r: 67.4, estimated: false }  # 멀티모달
  long_context: { s: 89.8, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-6 Astra (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-6 Astra (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **51.5548393864113** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 48.8521868154739 t/s · TTFT 5.19477838730003s · 1M ctx` · 가성비 6.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 78.5 | +1.9 | 실측 | [[gpqa-diamond]] 93.9394%×0.4, [[humanitys-last-exam]] 52.734%×0.3 |
| 추론 | 85.8 | +2.39 | 실측 | [[critpt]] 29.1429%×1.0, [[gpqa-diamond]] 93.9394%×1.0, [[humanitys-last-exam]] 52.734%×1.0 |
| 코딩 | 68.5 | +1.24 | 실측 | [[scicode]] 54.1667%×1.0 |
| 에이전트 | 65.5 | +1.03 | 실측 | [[gdpval]] 1500.95 Elo×1.0, [[tau3-banking]] 35.4639%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.4 | +1.16 | 실측 | [[mmmu-pro]] 85.0867%×1.0 |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 79.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
