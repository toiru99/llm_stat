---
type: Model
title: Grok 4.3 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 38.0
price_blended_usd_1m: 0.64
output_speed_tps: 113.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.8, z: 1.14, r: 67.1, estimated: false }  # 전문 지식
  reasoning: { s: 60.4, z: 1.27, r: 69.0, estimated: false }  # 추론
  coding: { s: 69.7, z: 0.95, r: 64.3, estimated: false }  # 코딩
  agentic: { s: 52.5, z: 0.59, r: 58.8, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.34, r: 85.1, estimated: false }  # 신뢰성
  multimodal: { s: 88.7, z: 0.9, r: 63.5, estimated: false }  # 멀티모달
  long_context: { s: 79.5, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.85, r: 77.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Grok 4.3 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **38.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 긴문맥, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 113.0 t/s · TTFT 18.67s · 1M ctx` · 가성비 59.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.1 | +1.14 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 69.0 | +1.27 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 64.3 | +0.95 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 58.8 | +0.59 | 실측 | [[apex-agents]] 17.0%×1.0, [[gdpval]] 29.0%×1.0, [[itbench]] 33.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 85.1 | +2.34 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 63.5 | +0.9 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 66.0%×1.0 |
| 지시 따르기 | 77.7 | +1.85 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
