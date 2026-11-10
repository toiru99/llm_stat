---
type: Model
title: Claude Fable 5.1 (low)
creator: Anthropic
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 7.175
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 79.7, z: 1.58, r: 73.7, estimated: false }  # 전문 지식
  reasoning: { s: 73.5, z: 1.48, r: 72.2, estimated: false }  # 추론
  coding: { s: 81.9, z: 1.48, r: 72.2, estimated: false }  # 코딩
  agentic: { s: 77.5, z: 1.45, r: 71.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.8, z: 1.19, r: 67.9, estimated: false }  # 긴문맥
  instruction: { s: 80.5, z: 1.19, r: 67.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude Fable 5.1 (low)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 5.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.7 | +1.58 | 실측 | [[gpqa-diamond]] 88.1%×0.4, [[humanitys-last-exam]] 48.9%×0.3 |
| 추론 | 72.2 | +1.48 | 실측 | [[critpt]] 49.5%×1.0, [[gpqa-diamond]] 88.1%×1.0, [[humanitys-last-exam]] 48.9%×1.0 |
| 코딩 | 72.2 | +1.48 | 실측 | [[scicode]] 56.7%×1.0 |
| 에이전트 | 71.7 | +1.45 | 실측 | [[gdpval]] 1477.0%×1.0, [[tau3-banking]] 39.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.9 | +1.19 | 실측 | [[aa-lcr]] 82.3%×1.0 |
| 지시 따르기 | 67.9 | +1.19 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
