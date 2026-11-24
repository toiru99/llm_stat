---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 75.1839485042342
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.7, z: 1.94, r: 79.1, estimated: false }  # 전문 지식
  reasoning: { s: 82.5, z: 2.35, r: 85.3, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.32, r: 69.8, estimated: false }  # 코딩
  agentic: { s: 88.4, z: 1.45, r: 71.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.7, z: 1.09, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 75.1839485042342 t/s · TTFT 25.4000680747499s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 79.1 | +1.94 | 실측 | [[gpqa-diamond]] 93.7374%×0.4, [[humanitys-last-exam]] 54.4022%×0.3 |
| 추론 | 85.3 | +2.35 | 실측 | [[critpt]] 27.7143%×1.0, [[gpqa-diamond]] 93.7374%×1.0, [[humanitys-last-exam]] 54.4022%×1.0 |
| 코딩 | 69.8 | +1.32 | 실측 | [[scicode]] 55.6713%×1.0 |
| 에이전트 | 71.8 | +1.45 | 실측 | [[gdpval]] 1694.56 Elo×1.0, [[tau3-banking]] 43.299%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.3 | +1.09 | 실측 | [[mmmu-pro]] 83.9884%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 80.3333%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
