---
type: Model
title: Claude 4 Sonnet
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.3, z: 0.13, r: 51.9, estimated: false }  # 전문 지식
  reasoning: { s: 47.9, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 47.0, z: 0.33, r: 55.0, estimated: false }  # 코딩
  agentic: { s: 39.2, z: 0.17, r: 52.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 64.4, z: -0.38, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 78.7, z: 0.79, r: 61.9, estimated: false }  # 긴문맥
  instruction: { s: 60.6, z: 0.33, r: 54.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude 4 Sonnet

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.9 | +0.13 | 실측 | [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 55.0 | +0.33 | 실측 | [[terminal-bench]] 31.0%×0.5 |
| 에이전트 | 52.6 | +0.17 | 실측 | [[gdpval]] 698.0%×1.0, [[tau3-banking]] 17.0%×1.0, [[terminal-bench]] 31.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.2 | -0.38 | 실측 | [[mmmu-pro]] 62.0%×1.0 |
| 긴문맥 | 61.9 | +0.79 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 54.9 | +0.33 | 실측 | [[ifbench]] 55.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
