---
type: Model
title: Claude Sonnet 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 79.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.4, z: 1.45, r: 71.8, estimated: false }  # 전문 지식
  reasoning: { s: 80.4, z: 1.57, r: 73.5, estimated: false }  # 추론
  coding: { s: 78.3, z: 1.38, r: 70.7, estimated: false }  # 코딩
  agentic: { s: 75.7, z: 1.43, r: 71.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 84.9, z: 0.64, r: 59.6, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.2, r: 68.0, estimated: false }  # 긴문맥
  instruction: { s: 78.0, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Sonnet 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 79.0 t/s · TTFT 157.23s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.8 | +1.45 | 실측 | [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 41.0%×0.3 |
| 추론 | 73.5 | +1.57 | 실측 | [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 41.0%×1.0 |
| 코딩 | 70.7 | +1.38 | 실측 | [[scicode]] 54.0%×1.0 |
| 에이전트 | 71.4 | +1.43 | 실측 | [[gdpval]] 1470.0%×1.0, [[tau3-banking]] 37.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.6 | +0.64 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 68.0 | +1.2 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
