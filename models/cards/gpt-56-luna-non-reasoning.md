---
type: Model
title: GPT-5.6 Luna (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.174
output_speed_tps: 95.3037113371723
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.8, z: -0.34, r: 44.9, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.55, r: 41.8, estimated: false }  # 추론
  coding: { s: 55.0, z: 0.47, r: 57.1, estimated: false }  # 코딩
  agentic: { s: 38.6, z: -0.3, r: 45.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.1, z: -0.52, r: 42.1, estimated: false }  # 멀티모달
  long_context: { s: 48.1, z: -0.29, r: 45.6, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Luna (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.6 Luna (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.2 · 출력 $1.2 · 혼합 $0.174/1M · 95.3037113371723 t/s · TTFT 1.25455445964525s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.9 | -0.34 | 실측 | [[gpqa-diamond]] 64.5455%×0.4, [[humanitys-last-exam]] 7.22892%×0.3 |
| 추론 | 41.8 | -0.55 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 64.5455%×1.0, [[humanitys-last-exam]] 7.22892%×1.0 |
| 코딩 | 57.1 | +0.47 | 실측 | [[scicode]] 40.3935%×1.0 |
| 에이전트 | 45.5 | -0.3 | 실측 | [[gdpval]] 928 Elo×1.0, [[tau3-banking]] 9.69072%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.1 | -0.52 | 실측 | [[mmmu-pro]] 60.3468%×1.0 |
| 긴문맥 | 45.6 | -0.29 | 실측 | [[aa-lcr]] 42.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
