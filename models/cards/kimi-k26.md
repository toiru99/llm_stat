---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: 27.0
price_blended_usd_1m: 0.702
output_speed_tps: 55.0
context_window: 256000
status: past
size_class: Large
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.7, z: 0.95, r: 64.2, estimated: false }  # 전문 지식
  reasoning: { s: 59.7, z: 1.14, r: 67.0, estimated: false }  # 추론
  coding: { s: 72.2, z: 1.29, r: 69.3, estimated: false }  # 코딩
  agentic: { s: 60.1, z: 0.86, r: 62.9, estimated: false }  # 에이전트
  trust: { s: 58.8, z: 1.55, r: 73.2, estimated: false }  # 신뢰성
  multimodal: { s: 87.7, z: 0.87, r: 63.0, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.52, r: 72.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Kimi K2.6

Kimi · Open · Large · 컨텍스트 256k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $0.702/1M · 55.0 t/s · TTFT 2.8s · 256k ctx` · 가성비 38.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.2 | +0.95 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 67.0 | +1.14 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 69.3 | +1.29 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 62.9 | +0.86 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 26.0%×1.0, [[itbench]] 31.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 23.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 73.2 | +1.55 | 실측 | [[aa-omniscience]] 59.0%×1.0 |
| 멀티모달 | 63.0 | +0.87 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 72.8 | +1.52 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
