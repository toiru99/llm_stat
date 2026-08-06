---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: 40.0
price_blended_usd_1m: 0.54
output_speed_tps: 94.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 83.0, z: 1.96, r: 79.4, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.42, r: 71.3, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.15, r: 52.3, estimated: false }  # 에이전트
  trust: { s: 10.3, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 88.6, z: 0.81, r: 62.1, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.75, r: 61.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **40.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $0.54/1M · 94.0 t/s · TTFT 0.54s · 256k ctx` · 가성비 74.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.4 | +1.96 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 71.3 | +1.42 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 52.3 | +0.15 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 11.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 62.1 | +0.81 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 61.3 | +0.75 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
