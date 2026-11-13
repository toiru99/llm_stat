---
type: Model
title: Claude Fable 5
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 7.7
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 86.5, z: 1.9, r: 78.5, estimated: false }  # 전문 지식
  reasoning: { s: 85.0, z: 2.03, r: 80.5, estimated: false }  # 추론
  coding: { s: 91.1, z: 1.78, r: 76.7, estimated: false }  # 코딩
  agentic: { s: 85.4, z: 1.71, r: 75.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 72.2, z: 0.82, r: 62.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-13
timestamp: 2026-11-13T00:00:00Z
---

# Claude Fable 5

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.5 | +1.9 | 실측 | [[gpqa-diamond]] 92.6%×0.4, [[humanitys-last-exam]] 55.5%×0.3 |
| 추론 | 80.5 | +2.03 | 실측 | [[gpqa-diamond]] 92.6%×1.0, [[humanitys-last-exam]] 55.5%×1.0 |
| 코딩 | 76.7 | +1.78 | 실측 | [[scicode]] 61.0%×1.0, [[terminal-bench]] 62.9%×0.5 |
| 에이전트 | 75.6 | +1.71 | 실측 | [[gdpval]] 1618.0%×1.0, [[tau3-banking]] 38.1%×1.0, [[terminal-bench]] 62.9%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 82.3%×1.0 |
| 지시 따르기 | 62.3 | +0.82 | 실측 | [[ifbench]] 63.5%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
