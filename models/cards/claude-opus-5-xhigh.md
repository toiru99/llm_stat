---
type: Model
title: Claude Opus 5 (xhigh)
creator: Anthropic
license: Proprietary
intelligence_index: 50.0
price_blended_usd_1m: 3.85
output_speed_tps: 51.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.2, z: 2.27, r: 84.1, estimated: false }  # 전문 지식
  reasoning: { s: 91.2, z: 2.51, r: 87.6, estimated: false }  # 추론
  coding: { s: 81.7, z: 1.57, r: 73.6, estimated: false }  # 코딩
  agentic: { s: 86.2, z: 1.84, r: 77.5, estimated: false }  # 에이전트
  trust: { s: 39.2, z: 0.6, r: 59.1, estimated: false }  # 신뢰성
  multimodal: { s: 94.5, z: 1.18, r: 67.8, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 76.0, z: 0.92, r: 63.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 5 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# Claude Opus 5 (xhigh)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **50.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 51.0 t/s · TTFT 47.33s · 1M ctx` · 가성비 13.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 84.1 | +2.27 | 실측 | [[aa-omniscience]] 60.0%×1.0, [[gpqa-diamond]] 94.0%×0.4, [[humanitys-last-exam]] 54.0%×0.3 |
| 추론 | 87.6 | +2.51 | 실측 | [[critpt]] 28.0%×1.0, [[gpqa-diamond]] 94.0%×1.0, [[humanitys-last-exam]] 54.0%×1.0 |
| 코딩 | 73.6 | +1.57 | 실측 | [[scicode]] 56.0%×1.0 |
| 에이전트 | 77.5 | +1.84 | 실측 | [[gdpval]] 59.0%×1.0, [[tau3-banking]] 43.0%×1.0 |
| 신뢰성 | 59.1 | +0.6 | 실측 | [[aa-omniscience]] 40.0%×1.0 |
| 멀티모달 | 67.8 | +1.18 | 실측 | [[mmmu-pro]] 84.0%×1.0 |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 63.7 | +0.92 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
