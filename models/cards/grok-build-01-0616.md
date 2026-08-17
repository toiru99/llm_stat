---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: 41.0
price_blended_usd_1m: 0.54
output_speed_tps: 73.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.8, z: 1.88, r: 78.2, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 1.36, r: 70.5, estimated: false }  # 추론
  coding: { s: 83.3, z: 1.44, r: 71.6, estimated: false }  # 코딩
  agentic: { s: 39.6, z: 0.12, r: 51.8, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.94, r: 35.9, estimated: false }  # 신뢰성
  multimodal: { s: 88.6, z: 0.78, r: 61.7, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.03, r: 65.4, estimated: false }  # 긴문맥
  instruction: { s: 71.5, z: 0.7, r: 60.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-17
timestamp: 2026-08-17T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **41.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $0.54/1M · 73.0 t/s · TTFT 0.5s · 256k ctx` · 가성비 75.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.2 | +1.88 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 70.5 | +1.36 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 71.6 | +1.44 | 실측 | [[scicode]] 50.0%×1.0 |
| 에이전트 | 51.8 | +0.12 | 실측 | [[gdpval]] 36.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 61.7 | +0.78 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 65.4 | +1.03 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 60.6 | +0.7 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
