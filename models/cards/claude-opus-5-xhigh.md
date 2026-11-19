---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 79.7324458224924
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.7, z: 1.9, r: 78.5, estimated: false }  # 전문 지식
  reasoning: { s: 82.5, z: 2.31, r: 84.7, estimated: false }  # 추론
  coding: { s: 80.2, z: 1.36, r: 70.5, estimated: false }  # 코딩
  agentic: { s: 88.4, z: 1.5, r: 72.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.7, z: 1.09, r: 66.3, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 84.4, z: 1.28, r: 69.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 79.7324458224924 t/s · TTFT 14.335753628175s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.5 | +1.9 | 실측 | [[gpqa-diamond]] 93.7373737373737%×0.4, [[humanitys-last-exam]] 54.40222428174239%×0.3 |
| 추론 | 84.7 | +2.31 | 실측 | [[critpt]] 27.7142857142857%×1.0, [[gpqa-diamond]] 93.7373737373737%×1.0, [[humanitys-last-exam]] 54.40222428174239%×1.0 |
| 코딩 | 70.5 | +1.36 | 실측 | [[scicode]] 55.671296296296305%×1.0 |
| 에이전트 | 72.6 | +1.5 | 실측 | [[gdpval]] 1694.56%×1.0, [[tau3-banking]] 43.298969072165%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.3 | +1.09 | 실측 | [[mmmu-pro]] 83.9884393063584%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 80.3333333333333%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
