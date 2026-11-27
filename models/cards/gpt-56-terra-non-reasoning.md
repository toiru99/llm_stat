---
type: Model
title: GPT-5.6 Terra (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 84.6352193763308
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 48.9, z: 0.1, r: 51.6, estimated: false }  # 전문 지식
  reasoning: { s: 31.6, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 62.9, z: 0.74, r: 61.0, estimated: false }  # 코딩
  agentic: { s: 48.4, z: 0.04, r: 50.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 69.6, z: -0.09, r: 48.6, estimated: false }  # 멀티모달
  long_context: { s: 66.2, z: 0.26, r: 53.9, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-5.6 Terra (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 84.6352193763308 t/s · TTFT 1.25309005736658s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 51.6 | +0.1 | 실측 | [[gpqa-diamond]] 74.6465%×0.4, [[humanitys-last-exam]] 11.3994%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[critpt]] 2%×1.0, [[gpqa-diamond]] 74.6465%×1.0, [[humanitys-last-exam]] 11.3994%×1.0 |
| 코딩 | 61.0 | +0.74 | 실측 | [[scicode]] 45.1389%×1.0 |
| 에이전트 | 50.6 | +0.04 | 실측 | [[gdpval]] 1105.74 Elo×1.0, [[tau3-banking]] 15.6701%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 48.6 | -0.09 | 실측 | [[mmmu-pro]] 66.7052%×1.0 |
| 긴문맥 | 53.9 | +0.26 | 실측 | [[aa-lcr]] 58.6667%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
