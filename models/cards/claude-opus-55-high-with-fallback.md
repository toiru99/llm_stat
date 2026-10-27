---
type: Model
title: Claude Opus 5.5 (high with fallback)
creator: Anthropic
license: Proprietary
intelligence_index: 54.0
price_blended_usd_1m: 2.94
output_speed_tps: 80.0
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 95.8, z: 2.43, r: 86.5, estimated: false }  # 전문 지식
  reasoning: { s: 92.8, z: 2.52, r: 87.7, estimated: false }  # 추론
  coding: { s: 88.3, z: 1.7, r: 75.6, estimated: false }  # 코딩
  agentic: { s: 91.8, z: 1.97, r: 79.5, estimated: false }  # 에이전트
  trust: { s: 30.9, z: 0.16, r: 52.5, estimated: false }  # 신뢰성
  multimodal: { s: 97.3, z: 1.26, r: 68.8, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.21, r: 68.2, estimated: false }  # 긴문맥
  instruction: { s: 77.3, z: 0.98, r: 64.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5.5 (high with fallback)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Claude Opus 5.5 (high with fallback)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **54.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $2.94/1M · 80.0 t/s · TTFT 34.76s · 1M ctx` · 가성비 18.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 86.5 | +2.43 | 실측 | [[aa-omniscience]] 65.0%×1.0, [[humanitys-last-exam]] 56.0%×0.3 |
| 추론 | 87.7 | +2.52 | 실측 | [[critpt]] 31.0%×1.0, [[humanitys-last-exam]] 56.0%×1.0 |
| 코딩 | 75.6 | +1.7 | 실측 | [[scicode]] 60.0%×1.0 |
| 에이전트 | 79.5 | +1.97 | 실측 | [[gdpval]] 1713.0%×1.0 |
| 신뢰성 | 52.5 | +0.16 | 실측 | [[aa-omniscience]] 32.0%×1.0 |
| 멀티모달 | 68.8 | +1.26 | 실측 | [[mmmu-pro]] 86.0%×1.0 |
| 긴문맥 | 68.2 | +1.21 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 64.7 | +0.98 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
