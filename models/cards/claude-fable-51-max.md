---
type: Model
title: Claude Fable 5.1 (max)
creator: Anthropic
license: Proprietary
intelligence_index: 49.0
price_blended_usd_1m: 7.175
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 89.4, z: 2.05, r: 80.7, estimated: false }  # 전문 지식
  reasoning: { s: 81.6, z: 1.88, r: 78.2, estimated: false }  # 추론
  coding: { s: 92.4, z: 1.84, r: 77.5, estimated: false }  # 코딩
  agentic: { s: 91.5, z: 1.92, r: 78.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 96.2, z: 1.29, r: 69.4, estimated: false }  # 긴문맥
  instruction: { s: 80.1, z: 1.17, r: 67.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5.1 (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Claude Fable 5.1 (max)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **49.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.175/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 6.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.7 | +2.05 | 실측 | [[gpqa-diamond]] 93.7%×0.4, [[humanitys-last-exam]] 59.1%×0.3 |
| 추론 | 78.2 | +1.88 | 실측 | [[critpt]] 52.5%×1.0, [[gpqa-diamond]] 93.7%×1.0, [[humanitys-last-exam]] 59.1%×1.0 |
| 코딩 | 77.5 | +1.84 | 실측 | [[scicode]] 63.1%×1.0 |
| 에이전트 | 78.8 | +1.92 | 실측 | [[gdpval]] 1763.0%×1.0, [[itbench]] 49.5%×1.0, [[tau3-banking]] 47.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.4 | +1.29 | 실측 | [[aa-lcr]] 85.3%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
