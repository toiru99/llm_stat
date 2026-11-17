---
type: Model
title: Claude Opus 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 78.39836280800436
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.7, z: 1.77, r: 76.5, estimated: false }  # 전문 지식
  reasoning: { s: 79.6, z: 2.19, r: 82.9, estimated: false }  # 추론
  coding: { s: 73.3, z: 1.14, r: 67.2, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.8, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 82.8, z: 1.22, r: 68.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Opus 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 78.39836280800436 t/s · TTFT 4.771789040143015s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.5 | +1.77 | 실측 | [[gpqa-diamond]] 91.9191919191919%×0.4, [[humanitys-last-exam]] 51.29749768303981%×0.3 |
| 추론 | 82.9 | +2.19 | 실측 | [[critpt]] 26.8571428571429%×1.0, [[gpqa-diamond]] 91.9191919191919%×1.0, [[humanitys-last-exam]] 51.29749768303981%×1.0 |
| 코딩 | 67.2 | +1.14 | 실측 | [[scicode]] 51.5046296296296%×1.0 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[gdpval]] 1498.08%×1.0, [[tau3-banking]] 38.5567010309278%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 81.6184971098266%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 68.3 | +1.22 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
