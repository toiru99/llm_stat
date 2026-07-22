---
type: Model
title: Kimi K2.6
creator: Kimi
license: Open
intelligence_index: 44.0
price_blended_usd_1m: None
output_speed_tps: 54.0
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 65.9, z: 1.21, r: 68.2, estimated: false }  # 전문 지식
  reasoning: { s: 62.9, z: 1.52, r: 72.8, estimated: false }  # 추론
  coding: { s: 81.1, z: 1.46, r: 71.8, estimated: false }  # 코딩
  agentic: { s: 65.9, z: 1.14, r: 67.1, estimated: false }  # 에이전트
  trust: { s: 70.6, z: 2.01, r: 80.1, estimated: false }  # 신뢰성
  multimodal: { s: 92.8, z: 1.0, r: 65.0, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 90.1, z: 1.55, r: 73.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2.6
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-22
timestamp: 2026-07-22T00:00:00Z
---

# Kimi K2.6

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.95 · 출력 $4.0 · 혼합 $None/1M · 54.0 t/s · TTFT 2.79s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.2 | +1.21 | 실측 | [[aa-omniscience]] 33.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 72.8 | +1.52 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 71.8 | +1.46 | 실측 | [[scicode]] 53.0%×1.0, [[terminal-bench]] 44.0%×0.5 |
| 에이전트 | 67.1 | +1.14 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 34.0%×1.0, [[itbench]] 31.0%×1.0, [[tau2-bench]] 96.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 44.0%×1.0 |
| 신뢰성 | 80.1 | +2.01 | 실측 | [[aa-omniscience]] 61.0%×1.0 |
| 멀티모달 | 65.0 | +1.0 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 73.2 | +1.55 | 실측 | [[ifbench]] 76.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
