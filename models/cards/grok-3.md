---
type: Model
title: Grok 3
creator: SpaceXAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 3.88
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.4, z: 0.2, r: 53.0, estimated: false }  # 전문 지식
  reasoning: { s: 26.0, z: -0.39, r: 44.1, estimated: false }  # 추론
  coding: { s: 46.7, z: 0.03, r: 50.5, estimated: false }  # 코딩
  agentic: { s: 33.1, z: -0.11, r: 48.3, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.53, r: 42.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 72.4, z: 0.71, r: 60.7, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.12, r: 48.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# Grok 3

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.88/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 4.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.0 | +0.2 | 실측 | [[aa-omniscience]] 28.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 44.1 | -0.39 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 50.5 | +0.03 | 실측 | [[scicode]] 37.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 48.3 | -0.11 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 42.1 | -0.53 | 실측 | [[aa-omniscience]] 15.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.7 | +0.71 | 실측 | [[aa-lcr]] 55.0%×1.0 |
| 지시 따르기 | 48.2 | -0.12 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
