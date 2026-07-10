---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: 44.0
price_blended_usd_1m: 0.7
output_speed_tps: 43.0
context_window: 256000
status: current
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 65.9, z: 1.25, r: 68.7, estimated: false }  # 전문 지식
  reasoning: { s: 62.9, z: 1.57, r: 73.5, estimated: false }  # 추론
  coding: { s: 81.1, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 66.0, z: 1.17, r: 67.5, estimated: false }  # 에이전트
  trust: { s: 70.6, z: 2.03, r: 80.5, estimated: false }  # 신뢰성
  multimodal: { s: 92.8, z: 1.02, r: 65.3, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.3, r: 69.5, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.56, r: 73.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Kimi K2.6

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **44.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.7/1M · 43.0 t/s · TTFT 2.88s · 256k ctx` · 가성비 62.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.7 | +1.25 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 73.5 | +1.57 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 67.5 | +1.17 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 35.0%×1.0, [[itbench]] 31.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 80.5 | +2.03 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | 65.3 | +1.02 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.5 | +1.3 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 73.4 | +1.56 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
