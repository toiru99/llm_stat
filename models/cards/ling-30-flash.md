---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.0475
output_speed_tps: 334.0
context_window: 262000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.1, z: 0.02, r: 50.3, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.33, r: 54.9, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.73, r: 61.0, estimated: false }  # 코딩
  agentic: { s: 42.6, z: 0.14, r: 52.0, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.34, r: 70.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.91, r: 63.6, estimated: false }  # 긴문맥
  instruction: { s: 71.0, z: 0.69, r: 60.4, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-09
timestamp: 2026-10-09T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 334.0 t/s · TTFT 2.5s · 262k ctx` · 가성비 421.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.3 | +0.02 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 54.9 | +0.33 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 61.0 | +0.73 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 52.0 | +0.14 | 실측 | [[gdpval]] 22.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 70.0 | +1.34 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.6 | +0.91 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 60.4 | +0.69 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
