---
type: Model
title: Claude Opus 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 52.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.7, z: 1.95, r: 79.3, estimated: false }  # 전문 지식
  reasoning: { s: 93.3, z: 2.15, r: 82.2, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 87.5, z: 1.83, r: 77.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 95.9, z: 1.19, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 88.8, z: 1.1, r: 66.4, estimated: false }  # 긴문맥
  instruction: { s: 78.5, z: 1.08, r: 66.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-31
timestamp: 2026-10-31T00:00:00Z
---

# Claude Opus 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 52.0 t/s · TTFT 45.56s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.3 | +1.95 | 실측 | [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 55.0%×0.3 |
| 추론 | 82.2 | +2.15 | 실측 | [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 55.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 77.5 | +1.83 | 실측 | [[gdpval]] 1730.0%×1.0, [[tau3-banking]] 42.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.8 | +1.19 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 66.4 | +1.1 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 66.2 | +1.08 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
