---
type: Model
title: Claude Opus 5 (low)
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
  knowledge: { s: 77.0, z: 1.45, r: 71.8, estimated: false }  # 전문 지식
  reasoning: { s: 74.6, z: 1.54, r: 73.2, estimated: false }  # 추론
  coding: { s: 69.6, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 64.6, z: 1.01, r: 65.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 91.7, z: 1.16, r: 67.4, estimated: false }  # 긴문맥
  instruction: { s: 88.1, z: 1.52, r: 72.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-12
timestamp: 2026-11-12T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.8 | +1.45 | 실측 | [[gpqa-diamond]] 88.9%×0.4, [[humanitys-last-exam]] 43.4%×0.3 |
| 추론 | 73.2 | +1.54 | 실측 | [[gpqa-diamond]] 88.9%×1.0, [[humanitys-last-exam]] 43.4%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[scicode]] 49.2%×1.0 |
| 에이전트 | 65.1 | +1.01 | 실측 | [[gdpval]] 1311.0%×1.0, [[tau3-banking]] 30.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.4 | +1.16 | 실측 | [[aa-lcr]] 81.3%×1.0 |
| 지시 따르기 | 72.8 | +1.52 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
