---
type: Model
title: Claude Sonnet 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 102.99891665618037
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.3, z: 1.44, r: 71.7, estimated: false }  # 전문 지식
  reasoning: { s: 65.4, z: 1.47, r: 72.1, estimated: false }  # 추론
  coding: { s: 77.9, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 77.6, z: 1.13, r: 67.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 83.7, z: 0.63, r: 59.4, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.15, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 79.2, z: 1.06, r: 65.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Claude Sonnet 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 102.99891665618037 t/s · TTFT 133.44793914305274s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.7 | +1.44 | 실측 | [[gpqa-diamond]] 91.1111111111111%×0.4, [[humanitys-last-exam]] 41.2882298424467%×0.3 |
| 추론 | 72.1 | +1.47 | 실측 | [[critpt]] 16.8571428571429%×1.0, [[gpqa-diamond]] 91.1111111111111%×1.0, [[humanitys-last-exam]] 41.2882298424467%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 54.2824074074074%×1.0 |
| 에이전트 | 67.0 | +1.13 | 실측 | [[gdpval]] 1469.82%×1.0, [[tau3-banking]] 37.319587628866%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 59.4 | +0.63 | 실측 | [[mmmu-pro]] 77.28323699421969%×1.0 |
| 긴문맥 | 67.3 | +1.15 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 65.9 | +1.06 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
