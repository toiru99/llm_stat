---
type: Model
title: Grok 3 mini Reasoning (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: 23.0
price_blended_usd_1m: 0.1625
output_speed_tps: 81.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.23, r: 46.6, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: 0.02, r: 50.2, estimated: false }  # 추론
  coding: { s: 54.1, z: 0.29, r: 54.4, estimated: false }  # 코딩
  agentic: { s: 58.3, z: 0.85, r: 62.8, estimated: false }  # 에이전트
  trust: { s: 85.1, z: 2.64, r: 89.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.8, z: 0.48, r: 57.2, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3 mini Reasoning (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-04
timestamp: 2026-08-04T00:00:00Z
---

# Grok 3 mini Reasoning (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **23.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 에이전트
- **약점**: 지시 따르기, 전문 지식

## 실용 지표
`입력 $0.3 · 출력 $0.5 · 혼합 $0.1625/1M · 81.0 t/s · TTFT 0.64s · 1M ctx` · 가성비 141.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.6 | -0.23 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 79.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 50.2 | +0.02 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 79.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 54.4 | +0.29 | 실측 | [[scicode]] 41.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 62.8 | +0.85 | 실측 | [[tau2-bench]] 90.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 89.6 | +2.64 | 실측 | [[aa-omniscience]] 75.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.2 | +0.48 | 실측 | [[aa-lcr]] 50.0%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
