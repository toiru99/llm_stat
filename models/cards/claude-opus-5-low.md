---
type: Model
title: Claude Opus 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 71.9539174374306
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.1, z: 1.43, r: 71.5, estimated: false }  # 전문 지식
  reasoning: { s: 71.4, z: 1.76, r: 76.5, estimated: false }  # 추론
  coding: { s: 69.5, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 67.1, z: 0.77, r: 61.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.1, z: 0.8, r: 62.0, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.13, r: 67.0, estimated: false }  # 긴문맥
  instruction: { s: 83.9, z: 1.26, r: 68.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 71.9539174374306 t/s · TTFT 2.76102093869721s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.5 | +1.43 | 실측 | [[gpqa-diamond]] 88.8888888888889%×0.4, [[humanitys-last-exam]] 43.4198331788693%×0.3 |
| 추론 | 76.5 | +1.76 | 실측 | [[critpt]] 23.1428571428571%×1.0, [[gpqa-diamond]] 88.8888888888889%×1.0, [[humanitys-last-exam]] 43.4198331788693%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 49.189814814814795%×1.0 |
| 에이전트 | 61.5 | +0.77 | 실측 | [[gdpval]] 1306.67%×1.0, [[tau3-banking]] 30.309278350515502%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.0 | +0.8 | 실측 | [[mmmu-pro]] 79.8265895953757%×1.0 |
| 긴문맥 | 67.0 | +1.13 | 실측 | [[aa-lcr]] 81.3333333333333%×1.0 |
| 지시 따르기 | 68.8 | +1.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
