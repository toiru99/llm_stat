---
type: Model
title: Grok 3
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.625
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 41.4, z: -0.35, r: 44.8, estimated: false }  # 전문 지식
  reasoning: { s: 36.9, z: -0.38, r: 44.2, estimated: false }  # 추론
  coding: { s: 17.3, z: -0.67, r: 39.9, estimated: false }  # 코딩
  agentic: { s: 17.3, z: -0.58, r: 41.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.4, z: 0.38, r: 55.7, estimated: false }  # 긴문맥
  instruction: { s: 48.9, z: -0.17, r: 47.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Grok 3

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.625/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.8 | -0.35 | 실측 | [[gpqa-diamond]] 69.3%×0.4, [[humanitys-last-exam]] 4.1%×0.3 |
| 추론 | 44.2 | -0.38 | 실측 | [[gpqa-diamond]] 69.3%×1.0, [[humanitys-last-exam]] 4.1%×1.0 |
| 코딩 | 39.9 | -0.67 | 실측 | [[terminal-bench]] 11.4%×0.5 |
| 에이전트 | 41.3 | -0.58 | 실측 | [[terminal-bench]] 11.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 55.7 | +0.38 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 47.4 | -0.17 | 실측 | [[ifbench]] 46.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
