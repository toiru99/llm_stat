---
type: Model
title: Claude 3.7 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.4, z: -0.44, r: 43.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.1, z: -0.48, r: 42.8, estimated: false }  # 추론
  coding: { s: 31.8, z: -0.18, r: 47.3, estimated: false }  # 코딩
  agentic: { s: 31.8, z: -0.08, r: 48.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.6, z: -0.52, r: 42.2, estimated: false }  # 멀티모달
  long_context: { s: 58.4, z: 0.19, r: 52.8, estimated: false }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3.7 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude 3.7 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.4 | -0.44 | 실측 | [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 42.8 | -0.48 | 실측 | [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 47.3 | -0.18 | 실측 | [[terminal-bench]] 21.0%×0.5 |
| 에이전트 | 48.8 | -0.08 | 실측 | [[terminal-bench]] 21.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.2 | -0.52 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 52.8 | +0.19 | 실측 | [[aa-lcr]] 52.0%×1.0 |
| 지시 따르기 | 45.2 | -0.32 | 실측 | [[ifbench]] 44.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
