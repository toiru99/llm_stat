---
type: Model
title: Claude Sonnet 5 (medium)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.54
output_speed_tps: 100.27079165382285
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 39.5, z: -0.37, r: 44.5, estimated: false }  # 전문 지식
  reasoning: { s: 31.7, z: -0.18, r: 47.3, estimated: false }  # 추론
  coding: { s: 73.5, z: 1.15, r: 67.3, estimated: false }  # 코딩
  agentic: { s: 69.1, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 83.1, z: 0.88, r: 63.3, estimated: false }  # 긴문맥
  instruction: { s: 54.7, z: 0.04, r: 50.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Claude Sonnet 5 (medium)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $2.0 · 출력 $10.0 · 혼합 $1.54/1M · 100.27079165382285 t/s · TTFT 3.527820230516683s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.5 | -0.37 | 실측 | [[humanitys-last-exam]] 29.9814643188137%×0.3 |
| 추론 | 47.3 | -0.18 | 실측 | [[critpt]] 8.57142857142857%×1.0, [[humanitys-last-exam]] 29.9814643188137%×1.0 |
| 코딩 | 67.3 | +1.15 | 실측 | [[scicode]] 51.6203703703704%×1.0 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[gdpval]] 1165.94%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.3 | +0.88 | 실측 | [[aa-lcr]] 73.6666666666667%×1.0 |
| 지시 따르기 | 50.6 | +0.04 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
