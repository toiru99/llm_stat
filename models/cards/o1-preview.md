---
type: Model
title: o1-preview
creator: OpenAI
license: Proprietary
intelligence_index: 17.0
price_blended_usd_1m: 15.675
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.6, z: 1.73, r: 76.0, estimated: false }  # 전문 지식
  reasoning: { s: 77.6, z: 2.07, r: 81.1, estimated: false }  # 추론
  coding: { s: 87.6, z: 1.61, r: 74.2, estimated: true }  # 코딩
  agentic: { s: 79.9, z: 1.7, r: 75.5, estimated: true }  # 에이전트
  trust: { s: 30.0, z: 0.13, r: 52.0, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 94.9, z: 1.35, r: 70.2, estimated: true }  # 긴문맥
  instruction: { s: 82.0, z: 1.13, r: 66.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o1-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# o1-preview

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **17.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $16.5 · 출력 $66.0 · 혼합 $15.675/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 1.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 76.0 | +1.73 | 실측 | [[gpqa-diamond]] 76.0%×0.4 |
| 추론 | 81.1 | +2.07 | 실측 | [[gpqa-diamond]] 76.0%×1.0 |
| 코딩 | 74.2 | +1.61 | 추정 | (추정) |
| 에이전트 | 75.5 | +1.7 | 추정 | (추정) |
| 신뢰성 | 52.0 | +0.13 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.2 | +1.35 | 추정 | (추정) |
| 지시 따르기 | 66.9 | +1.13 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
