---
type: Model
title: Claude Opus 4.5 (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 45.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.7, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 51.3, z: 0.25, r: 53.8, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.84, r: 62.6, estimated: false }  # 코딩
  agentic: { s: 62.1, z: 0.96, r: 64.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.23, r: 53.5, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Opus 4.5 (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 45.0 t/s · TTFT 1.11s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 53.8 | +0.25 | 실측 | [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 62.6 | +0.84 | 실측 | [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 64.4 | +0.96 | 실측 | [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.5 | +0.23 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
