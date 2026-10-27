---
type: Model
title: Ling 3.0 Flash
creator: InclusionAI
license: Open
intelligence_index: 20.0
price_blended_usd_1m: 0.0475
output_speed_tps: 245.0
context_window: 262000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.1, z: -0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 43.9, z: 0.3, r: 54.5, estimated: false }  # 추론
  coding: { s: 58.3, z: 0.69, r: 60.3, estimated: false }  # 코딩
  agentic: { s: 51.8, z: 0.59, r: 58.8, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.29, r: 69.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.88, r: 63.1, estimated: false }  # 긴문맥
  instruction: { s: 60.8, z: 0.27, r: 54.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.0 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Ling 3.0 Flash

InclusionAI · Open · Medium · 컨텍스트 262k · 종합지능 **20.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.07 · 출력 $0.22 · 혼합 $0.0475/1M · 245.0 t/s · TTFT 2.69s · 262k ctx` · 가성비 421.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +-0.0 | 실측 | [[aa-omniscience]] 18.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 54.5 | +0.3 | 실측 | [[critpt]] 2.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 60.3 | +0.69 | 실측 | [[scicode]] 42.0%×1.0 |
| 에이전트 | 58.8 | +0.59 | 실측 | [[gdpval]] 948.0%×1.0, [[tau3-banking]] 27.0%×1.0 |
| 신뢰성 | 69.3 | +1.29 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 63.1 | +0.88 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 54.1 | +0.27 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
