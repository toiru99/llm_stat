---
type: Model
title: MiMo-V2.6-Pro
creator: Xiaomi
license: Open
intelligence_index: 46.0
price_blended_usd_1m: 0.1765
output_speed_tps: 51.0
context_window: 1000000
status: current
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.6, z: 0.8, r: 62.0, estimated: false }  # 전문 지식
  reasoning: { s: 82.2, z: 2.19, r: 82.9, estimated: false }  # 추론
  coding: { s: 90.0, z: 1.91, r: 78.6, estimated: false }  # 코딩
  agentic: { s: 88.1, z: 1.93, r: 79.0, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.55, r: 73.2, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 96.6, z: 1.4, r: 71.1, estimated: false }  # 긴문맥
  instruction: { s: 76.3, z: 0.95, r: 64.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.6-Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# MiMo-V2.6-Pro

Xiaomi · Open · Large · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.1765/1M · 51.0 t/s · TTFT 3.01s · 1M ctx` · 가성비 260.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.0 | +0.8 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[humanitys-last-exam]] 49.0%×0.3 |
| 추론 | 82.9 | +2.19 | 실측 | [[critpt]] 27.0%×1.0, [[humanitys-last-exam]] 49.0%×1.0 |
| 코딩 | 78.6 | +1.91 | 실측 | [[scicode]] 61.0%×1.0 |
| 에이전트 | 79.0 | +1.93 | 실측 | [[gdpval]] 59.0%×1.0 |
| 신뢰성 | 73.2 | +1.55 | 실측 | [[aa-omniscience]] 59.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 71.1 | +1.4 | 실측 | [[aa-lcr]] 86.0%×1.0 |
| 지시 따르기 | 64.2 | +0.95 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
