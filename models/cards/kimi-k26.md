---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: 45.0
price_blended_usd_1m: 0.702
output_speed_tps: 38.0
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 62.3, z: 1.07, r: 66.1, estimated: false }  # 전문 지식
  reasoning: { s: 60.8, z: 1.29, r: 69.3, estimated: false }  # 추론
  coding: { s: 79.2, z: 1.35, r: 70.3, estimated: false }  # 코딩
  agentic: { s: 61.9, z: 0.95, r: 64.2, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.61, r: 74.2, estimated: false }  # 신뢰성
  multimodal: { s: 90.1, z: 0.97, r: 64.5, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.3, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.55, r: 73.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Kimi K2.6

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **45.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · 38.0 t/s · TTFT 2.75s · 256k ctx` · 가성비 64.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.1 | +1.07 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 69.3 | +1.29 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 70.3 | +1.35 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 64.2 | +0.95 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 34.0%×1.0, [[itbench]] 31.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 23.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 74.2 | +1.61 | 실측 | [[aa-omniscience]] 59.0%×1.0 |
| 멀티모달 | 64.5 | +0.97 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.4 | +1.3 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 73.3 | +1.55 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
