---
type: Model
title: Claude Opus 5 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 44.0
price_blended_usd_1m: 3.85
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 93.3, z: 1.94, r: 79.2, estimated: false }  # 전문 지식
  reasoning: { s: 85.0, z: 1.78, r: 76.7, estimated: false }  # 추론
  coding: { s: 82.5, z: 1.51, r: 72.6, estimated: false }  # 코딩
  agentic: { s: 87.4, z: 1.82, r: 77.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 94.6, z: 1.17, r: 67.5, estimated: false }  # 멀티모달
  long_context: { s: 89.4, z: 1.1, r: 66.5, estimated: false }  # 긴문맥
  instruction: { s: 81.3, z: 1.2, r: 68.0, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-08
timestamp: 2026-11-08T00:00:00Z
---

# Claude Opus 5 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **44.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 긴문맥

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 11.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.2 | +1.94 | 실측 | [[gpqa-diamond]] 93.2%×0.4, [[humanitys-last-exam]] 54.9%×0.3 |
| 추론 | 76.7 | +1.78 | 실측 | [[critpt]] 50.0%×1.0, [[gpqa-diamond]] 93.2%×1.0, [[humanitys-last-exam]] 54.9%×1.0 |
| 코딩 | 72.6 | +1.51 | 실측 | [[scicode]] 56.4%×1.0 |
| 에이전트 | 77.2 | +1.82 | 실측 | [[gdpval]] 1730.0%×1.0, [[tau3-banking]] 42.1%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 67.5 | +1.17 | 실측 | [[mmmu-pro]] 85.0%×1.0 |
| 긴문맥 | 66.5 | +1.1 | 실측 | [[aa-lcr]] 79.3%×1.0 |
| 지시 따르기 | 68.0 | +1.2 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
