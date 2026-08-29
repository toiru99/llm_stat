---
type: Model
title: Claude 4 Opus (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.3, z: 0.18, r: 52.7, estimated: false }  # 전문 지식
  reasoning: { s: 39.9, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 68.3, z: 0.87, r: 63.0, estimated: false }  # 코딩
  agentic: { s: 53.5, z: 0.65, r: 59.8, estimated: true }  # 에이전트
  trust: { s: 26.4, z: 0.11, r: 51.7, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 48.2, z: -0.04, r: 49.5, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.36, r: 44.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Opus (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Claude 4 Opus (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 2.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 52.7 | +0.18 | 실측 | [[gpqa-diamond]] 70.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[gpqa-diamond]] 70.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 63.0 | +0.87 | 실측 | [[scicode]] 41.0%×1.0 |
| 에이전트 | 59.8 | +0.65 | 추정 | (추정) |
| 신뢰성 | 51.7 | +0.11 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 49.5 | -0.04 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 44.5 | -0.36 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
