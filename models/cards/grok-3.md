---
type: Model
title: Grok 3
creator: SpaceXAI
license: Proprietary
intelligence_index: 12.0
price_blended_usd_1m: 2.625
output_speed_tps: 100.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 42.5, z: -0.01, r: 49.8, estimated: false }  # 전문 지식
  reasoning: { s: 24.5, z: -0.56, r: 41.7, estimated: false }  # 추론
  coding: { s: 16.7, z: -0.69, r: 39.6, estimated: false }  # 코딩
  agentic: { s: 33.1, z: -0.23, r: 46.5, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.71, r: 39.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.2, z: 0.39, r: 55.9, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-15
timestamp: 2026-10-15T00:00:00Z
---

# Grok 3

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.625/1M · 100.0 t/s · TTFT 1.78s · 1M ctx` · 가성비 4.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 49.8 | -0.01 | 실측 | [[aa-omniscience]] 29.0%×1.0, [[gpqa-diamond]] 69.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 41.7 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 39.6 | -0.69 | 실측 | [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 46.5 | -0.23 | 실측 | [[tau2-bench]] 49.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 39.3 | -0.71 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.9 | +0.39 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
