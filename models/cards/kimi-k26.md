---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: 43.0
price_blended_usd_1m: 0.7
output_speed_tps: 43.0
context_window: 256000
radar:
  knowledge: { s: 65.9, z: 0.64, r: 59.6, estimated: false }  # 전문 지식
  reasoning: { s: 63.2, z: 0.85, r: 62.8, estimated: false }  # 추론
  coding: { s: 82.2, z: 0.96, r: 64.4, estimated: false }  # 코딩
  agentic: { s: 67.7, z: 0.65, r: 59.8, estimated: false }  # 에이전트
  trust: { s: 71.2, z: 1.21, r: 68.1, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.8, r: 62.1, estimated: false }  # 멀티모달
  long_context: { s: 94.6, z: 0.85, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 0.92, r: 63.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# Kimi K2.6

Kimi · Open · 컨텍스트 256k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.7/1M · 43.0 t/s · TTFT 2.22s · 256k ctx` · 가성비 61.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.6 | +0.64 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 62.8 | +0.85 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 64.4 | +0.96 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 59.8 | +0.65 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 35.0%×1.0, [[itbench]] 31.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 68.1 | +1.21 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | 62.1 | +0.8 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 62.7 | +0.85 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 63.9 | +0.92 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
