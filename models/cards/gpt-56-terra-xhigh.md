---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 98.9034823722128
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.49, r: 72.4, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 1.99, r: 79.8, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.37, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.13, r: 66.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.7, z: 0.78, r: 61.7, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 0.96, r: 64.4, estimated: false }  # 긴문맥
  instruction: { s: 76.0, z: 1.06, r: 66.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 98.9034823722128 t/s · TTFT 15.7651577333666s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.4 | +1.49 | 실측 | [[gpqa-diamond]] 90.8081%×0.4, [[humanitys-last-exam]] 41.8906%×0.3 |
| 추론 | 79.8 | +1.99 | 실측 | [[critpt]] 27.1429%×1.0, [[gpqa-diamond]] 90.8081%×1.0, [[humanitys-last-exam]] 41.8906%×1.0 |
| 코딩 | 70.5 | +1.37 | 실측 | [[scicode]] 52.3148%×1.0, [[terminal-bench]] 62.8788%×0.5 |
| 에이전트 | 66.9 | +1.13 | 실측 | [[gdpval]] 1456.48 Elo×1.0, [[tau2-bench]] 80.4094%×1.0, [[tau3-banking]] 29.6907%×1.0, [[terminal-bench]] 62.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.7 | +0.78 | 실측 | [[mmmu-pro]] 79.4798%×1.0 |
| 긴문맥 | 64.4 | +0.96 | 실측 | [[aa-lcr]] 79%×1.0 |
| 지시 따르기 | 66.0 | +1.06 | 실측 | [[ifbench]] 66.2585%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
