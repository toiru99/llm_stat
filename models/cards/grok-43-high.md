---
type: Model
title: Grok 4.3 (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 29.0
price_blended_usd_1m: 0.64
output_speed_tps: 142.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.6, z: 1.09, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 60.0, z: 1.2, r: 68.0, estimated: false }  # 추론
  coding: { s: 65.5, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 52.3, z: 0.57, r: 58.5, estimated: false }  # 에이전트
  trust: { s: 74.2, z: 2.35, r: 85.2, estimated: false }  # 신뢰성
  multimodal: { s: 87.5, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 1.01, r: 65.2, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.86, r: 77.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# Grok 4.3 (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **29.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 142.0 t/s · TTFT 19.39s · 1M ctx` · 가성비 45.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 실측 | [[aa-omniscience]] 35.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 37.0%×0.3 |
| 추론 | 68.0 | +1.2 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 37.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 48.0%×1.0, [[terminal-bench]] 38.0%×0.5 |
| 에이전트 | 58.5 | +0.57 | 실측 | [[apex-agents]] 17.0%×1.0, [[gdpval]] 26.0%×1.0, [[itbench]] 33.0%×1.0, [[tau2-bench]] 98.0%×1.0, [[tau3-banking]] 12.0%×1.0, [[terminal-bench]] 38.0%×1.0 |
| 신뢰성 | 85.2 | +2.35 | 실측 | [[aa-omniscience]] 74.0%×1.0 |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 65.2 | +1.01 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 77.8 | +1.86 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
