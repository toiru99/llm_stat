---
type: Model
title: Claude Opus 5 (low)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 51.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.5, z: 1.46, r: 71.9, estimated: false }  # 전문 지식
  reasoning: { s: 80.9, z: 1.59, r: 73.9, estimated: false }  # 추론
  coding: { s: 70.0, z: 1.1, r: 66.5, estimated: false }  # 코딩
  agentic: { s: 64.5, z: 1.04, r: 65.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.85, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 91.0, z: 1.16, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 87.4, z: 1.45, r: 71.8, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Opus 5 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 51.0 t/s · TTFT 1.85s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.9 | +1.46 | 실측 | [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 73.9 | +1.59 | 실측 | [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 66.5 | +1.1 | 실측 | [[scicode]] 49.0%×1.0 |
| 에이전트 | 65.6 | +1.04 | 실측 | [[gdpval]] 1311.0%×1.0, [[tau3-banking]] 30.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.7 | +0.85 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 67.5 | +1.16 | 실측 | [[aa-lcr]] 81.0%×1.0 |
| 지시 따르기 | 71.8 | +1.45 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
