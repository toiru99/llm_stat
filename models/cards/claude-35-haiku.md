---
type: Model
title: Claude 3.5 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 22.0, z: -1.2, r: 31.9, estimated: false }  # 전문 지식
  reasoning: { s: 13.1, z: -1.09, r: 33.6, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 41.5, z: -1.53, r: 27.1, estimated: false }  # 멀티모달
  long_context: { s: 30.8, z: -0.82, r: 37.6, estimated: false }  # 긴문맥
  instruction: { s: 43.1, z: -0.31, r: 45.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.5 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Claude 3.5 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 코딩, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 31.9 | -1.2 | 실측 | [[gpqa-diamond]] 40.8081%×0.4, [[humanitys-last-exam]] 3.63%×0.3 |
| 추론 | 33.6 | -1.09 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 40.8081%×1.0, [[humanitys-last-exam]] 3.63%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[gdpval]] 217.62 Elo×1.0, [[tau2-bench]] 24.5614%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 27.1 | -1.53 | 실측 | [[mmmu-pro]] 45.6069%×1.0 |
| 긴문맥 | 37.6 | -0.82 | 실측 | [[aa-lcr]] 27.3333%×1.0 |
| 지시 따르기 | 45.4 | -0.31 | 실측 | [[ifbench]] 42.7891%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
