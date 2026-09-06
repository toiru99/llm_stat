---
type: Model
title: Grok Build 0.1 0616
creator: SpaceXAI
license: Proprietary
intelligence_index: 32.0
price_blended_usd_1m: 0.54
output_speed_tps: 67.0
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.5, z: 1.81, r: 77.2, estimated: false }  # 전문 지식
  reasoning: { s: 61.3, z: 1.26, r: 68.9, estimated: false }  # 추론
  coding: { s: 55.8, z: 0.82, r: 62.3, estimated: true }  # 코딩
  agentic: { s: 37.9, z: 0.02, r: 50.2, estimated: false }  # 에이전트
  trust: { s: 5.2, z: -0.91, r: 36.3, estimated: false }  # 신뢰성
  multimodal: { s: 86.1, z: 0.79, r: 61.8, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.08, r: 66.2, estimated: false }  # 긴문맥
  instruction: { s: 79.2, z: 1.1, r: 66.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok Build 0.1 0616
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Grok Build 0.1 0616

SpaceXAI · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **32.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 신뢰성

## 실용 지표
`입력 $1.0 · 출력 $2.0 · 혼합 $0.54/1M · 67.0 t/s · TTFT 0.5s · 256k ctx` · 가성비 59.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.2 | +1.81 | 실측 | [[aa-omniscience]] 52.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 68.9 | +1.26 | 실측 | [[critpt]] 9.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 62.3 | +0.82 | 추정 | (추정) |
| 에이전트 | 50.2 | +0.02 | 실측 | [[gdpval]] 32.0%×1.0, [[tau3-banking]] 13.0%×1.0 |
| 신뢰성 | 36.3 | -0.91 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 61.8 | +0.79 | 실측 | [[mmmu-pro]] 77.0%×1.0 |
| 긴문맥 | 66.2 | +1.08 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 66.5 | +1.1 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
