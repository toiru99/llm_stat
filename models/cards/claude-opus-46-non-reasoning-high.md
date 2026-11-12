---
type: Model
title: Claude Opus 4.6 (non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.6, z: 0.61, r: 59.2, estimated: false }  # 전문 지식
  reasoning: { s: 55.2, z: 0.59, r: 58.9, estimated: false }  # 추론
  coding: { s: 73.6, z: 1.21, r: 68.1, estimated: false }  # 코딩
  agentic: { s: 73.6, z: 1.32, r: 69.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.35, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 75.5, z: 0.68, r: 60.1, estimated: false }  # 긴문맥
  instruction: { s: 45.6, z: -0.31, r: 45.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Claude Opus 4.6 (non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.2 | +0.61 | 실측 | [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.1%×0.3 |
| 추론 | 58.9 | +0.59 | 실측 | [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.1%×1.0 |
| 코딩 | 68.1 | +1.21 | 실측 | [[terminal-bench]] 48.5%×0.5 |
| 에이전트 | 69.7 | +1.32 | 실측 | [[terminal-bench]] 48.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.2 | +0.35 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 60.1 | +0.68 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 45.4 | -0.31 | 실측 | [[ifbench]] 44.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
