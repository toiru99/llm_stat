---
type: Model
title: Grok 3
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.2
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.1, z: -0.3, r: 45.5, estimated: false }  # 전문 지식
  reasoning: { s: 24.3, z: -0.56, r: 41.7, estimated: false }  # 추론
  coding: { s: 17.2, z: -0.77, r: 38.4, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.4, r: 44.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.4, z: 0.35, r: 55.2, estimated: false }  # 긴문맥
  instruction: { s: 48.9, z: -0.21, r: 46.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# Grok 3

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $4.2/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.5 | -0.3 | 실측 | [[gpqa-diamond]] 69.2929292929293%×0.4, [[humanitys-last-exam]] 4.12%×0.3 |
| 추론 | 41.7 | -0.56 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 69.2929292929293%×1.0, [[humanitys-last-exam]] 4.12%×1.0 |
| 코딩 | 38.4 | -0.77 | 실측 | [[terminal-bench]] 11.363636363636399%×0.5 |
| 에이전트 | 44.0 | -0.4 | 실측 | [[tau2-bench]] 48.8304093567252%×1.0, [[terminal-bench]] 11.363636363636399%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.2 | +0.35 | 실측 | [[aa-lcr]] 57.99999999999999%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 실측 | [[ifbench]] 46.9387755102041%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
