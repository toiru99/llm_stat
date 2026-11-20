---
type: Model
title: Ling 3.1 Flash
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.192
output_speed_tps: 73.7126961837372
context_window: 1000000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.4, z: 0.24, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 51.4, z: 0.78, r: 61.7, estimated: false }  # 추론
  coding: { s: 77.5, z: 1.27, r: 69.1, estimated: false }  # 코딩
  agentic: { s: 89.4, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 64.2, z: 0.43, r: 56.5, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling 3.1 Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Ling 3.1 Flash

InclusionAI · Open · Large · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.9 · 혼합 $0.192/1M · 73.7126961837372 t/s · TTFT 4.3304786225896s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.24 | 실측 | [[humanitys-last-exam]] 39.4346617238183%×0.3 |
| 추론 | 61.7 | +0.78 | 실측 | [[critpt]] 18.0%×1.0, [[humanitys-last-exam]] 39.4346617238183%×1.0 |
| 코딩 | 69.1 | +1.27 | 실측 | [[scicode]] 54.050925925925895%×1.0 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 1625.44%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 56.5 | +0.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
