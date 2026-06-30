---
type: Model
title: Kimi K2.7 Code
creator: Kimi
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.7
output_speed_tps: 63.0
context_window: 256000
radar:
  knowledge: { s: 70.5, z: 0.87, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 63.0, z: 0.88, r: 63.2, estimated: false }  # 추론
  coding: { s: 76.0, z: 0.72, r: 60.8, estimated: false }  # 코딩
  agentic: { s: 66.1, z: 0.59, r: 58.9, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.47, r: 43.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.2, z: 0.67, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: 71.8, z: 0.21, r: 53.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.7 Code
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# Kimi K2.7 Code

Kimi · Open · 컨텍스트 256k · 종합지능 **42.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.7/1M · 63.0 t/s · TTFT 2.26s · 256k ctx` · 가성비 60.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.87 | 실측 | [[aa-omniscience]] 39.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 33.0%×0.3 |
| 추론 | 63.2 | +0.88 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 33.0%×1.0 |
| 코딩 | 60.8 | +0.72 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 58.9 | +0.59 | 실측 | [[gdpval]] 34.0%×1.0, [[tau2-bench]] 90.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 43.0 | -0.47 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.1 | +0.67 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 53.1 | +0.21 | 실측 | [[ifbench]] 63.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
