---
type: Model
title: Grok 3 mini Reasoning (high)
creator: SpaceXAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1625
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.8, z: 0.15, r: 52.3, estimated: false }  # 전문 지식
  reasoning: { s: 48.3, z: 0.13, r: 51.9, estimated: false }  # 추론
  coding: { s: 26.4, z: -0.37, r: 44.5, estimated: false }  # 코딩
  agentic: { s: 26.4, z: -0.27, r: 45.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 62.3, z: 0.29, r: 54.3, estimated: false }  # 긴문맥
  instruction: { s: 47.5, z: -0.23, r: 46.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 3 mini Reasoning (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Grok 3 mini Reasoning (high)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.3 · 출력 $0.5 · 혼합 $0.1625/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.3 | +0.15 | 실측 | [[gpqa-diamond]] 79.1%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 51.9 | +0.13 | 실측 | [[gpqa-diamond]] 79.1%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 44.5 | -0.37 | 실측 | [[terminal-bench]] 17.4%×0.5 |
| 에이전트 | 45.9 | -0.27 | 실측 | [[terminal-bench]] 17.4%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 54.3 | +0.29 | 실측 | [[aa-lcr]] 55.3%×1.0 |
| 지시 따르기 | 46.5 | -0.23 | 실측 | [[ifbench]] 45.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
