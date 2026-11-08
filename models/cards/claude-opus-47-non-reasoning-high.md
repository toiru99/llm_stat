---
type: Model
title: Claude Opus 4.7 (non-reasoning, high)
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
  knowledge: { s: 74.9, z: 1.13, r: 66.9, estimated: false }  # 전문 지식
  reasoning: { s: 72.2, z: 1.2, r: 68.0, estimated: false }  # 추론
  coding: { s: 82.7, z: 1.51, r: 72.7, estimated: false }  # 코딩
  agentic: { s: 82.7, z: 1.66, r: 74.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.56, r: 58.3, estimated: false }  # 멀티모달
  long_context: { s: 85.3, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 44.2, z: -0.37, r: 44.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Claude Opus 4.7 (non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.9 | +1.13 | 실측 | [[gpqa-diamond]] 88.5%×0.4, [[humanitys-last-exam]] 33.3%×0.3 |
| 추론 | 68.0 | +1.2 | 실측 | [[gpqa-diamond]] 88.5%×1.0, [[humanitys-last-exam]] 33.3%×1.0 |
| 코딩 | 72.7 | +1.51 | 실측 | [[terminal-bench]] 54.5%×0.5 |
| 에이전트 | 74.9 | +1.66 | 실측 | [[terminal-bench]] 54.5%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.3 | +0.56 | 실측 | [[mmmu-pro]] 76.0%×1.0 |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 75.7%×1.0 |
| 지시 따르기 | 44.4 | -0.37 | 실측 | [[ifbench]] 43.6%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
