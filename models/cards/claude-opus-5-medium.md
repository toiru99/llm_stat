---
type: Model
title: Claude Opus 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 75.4576358627012
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.7, z: 1.79, r: 76.9, estimated: false }  # 전문 지식
  reasoning: { s: 79.6, z: 2.21, r: 83.1, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.09, r: 66.3, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.5, z: 0.92, r: 63.9, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.06, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude Opus 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 75.4576358627012 t/s · TTFT 6.49376124681661s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 76.9 | +1.79 | 실측 | [[gpqa-diamond]] 91.9192%×0.4, [[humanitys-last-exam]] 51.2975%×0.3 |
| 추론 | 83.1 | +2.21 | 실측 | [[critpt]] 26.8571%×1.0, [[gpqa-diamond]] 91.9192%×1.0, [[humanitys-last-exam]] 51.2975%×1.0 |
| 코딩 | 66.3 | +1.09 | 실측 | [[scicode]] 51.5046%×1.0 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[gdpval]] 1498.08 Elo×1.0, [[tau3-banking]] 38.5567%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.9 | +0.92 | 실측 | [[mmmu-pro]] 81.6185%×1.0 |
| 긴문맥 | 66.0 | +1.06 | 실측 | [[aa-lcr]] 82%×1.0 |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
