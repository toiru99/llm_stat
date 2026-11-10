---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.6, z: 1.92, r: 78.7, estimated: false }  # 전문 지식
  reasoning: { s: 84.9, z: 2.04, r: 80.6, estimated: false }  # 추론
  coding: { s: 80.3, z: 1.43, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 87.6, z: 1.79, r: 76.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 93.2, z: 1.1, r: 66.5, estimated: false }  # 멀티모달
  long_context: { s: 90.5, z: 1.12, r: 66.9, estimated: false }  # 긴문맥
  instruction: { s: 79.1, z: 1.13, r: 67.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.7 | +1.92 | 실측 | [[gpqa-diamond]] 93.7%×0.4, [[humanitys-last-exam]] 54.4%×0.3 |
| 추론 | 80.6 | +2.04 | 실측 | [[gpqa-diamond]] 93.7%×1.0, [[humanitys-last-exam]] 54.4%×1.0 |
| 코딩 | 71.4 | +1.43 | 실측 | [[scicode]] 55.7%×1.0 |
| 에이전트 | 76.8 | +1.79 | 실측 | [[gdpval]] 1696.0%×1.0, [[tau3-banking]] 43.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.5 | +1.1 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 66.9 | +1.12 | 실측 | [[aa-lcr]] 80.3%×1.0 |
| 지시 따르기 | 67.0 | +1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
