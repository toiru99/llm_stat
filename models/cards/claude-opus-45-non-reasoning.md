---
type: Model
title: Claude Opus 4.5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.1, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 49.4, z: 0.3, r: 54.5, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.81, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 62.1, z: 0.92, r: 63.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.7, z: 0.21, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 79.7, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.41, r: 43.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Claude Opus 4.5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 13.2%×0.3 |
| 추론 | 54.5 | +0.3 | 실측 | [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 13.2%×1.0 |
| 코딩 | 62.1 | +0.81 | 실측 | [[terminal-bench]] 40.9%×0.5 |
| 에이전트 | 63.7 | +0.92 | 실측 | [[terminal-bench]] 40.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.21 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 70.7%×1.0 |
| 지시 따르기 | 43.8 | -0.41 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
