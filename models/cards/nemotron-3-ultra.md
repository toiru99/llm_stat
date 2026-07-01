---
type: Model
title: Nemotron 3 Ultra
creator: NVIDIA
license: Open
intelligence_index: 38.0
price_blended_usd_1m: 0.58
output_speed_tps: 139.0
context_window: 262000
radar:
  knowledge: { s: 51.0, z: -0.05, r: 49.2, estimated: false }  # 전문 지식
  reasoning: { s: 50.4, z: 0.24, r: 53.6, estimated: false }  # 추론
  coding: { s: 63.5, z: 0.13, r: 51.9, estimated: false }  # 코딩
  agentic: { s: 56.3, z: 0.2, r: 53.0, estimated: false }  # 에이전트
  trust: { s: 83.8, z: 1.63, r: 74.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 90.5, z: 0.7, r: 60.5, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.23, r: 68.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Nemotron 3 Ultra
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Nemotron 3 Ultra

NVIDIA · Open · 컨텍스트 262k · 종합지능 **38.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 전문 지식

## 실용 지표
`입력 $0.68 · 출력 $2.67 · 혼합 $0.58/1M · 139.0 t/s · TTFT 1.26s · 262k ctx` · 가성비 65.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.2 | -0.05 | 실측 | [[aa-omniscience]] 22.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 53.6 | +0.24 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 51.9 | +0.13 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 53.0 | +0.2 | 실측 | [[gdpval]] 33.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 74.5 | +1.63 | 실측 | [[aa-omniscience]] 71.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.5 | +0.7 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
