---
type: Model
title: o1-preview
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 15.675
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.1, z: 1.44, r: 71.5, estimated: false }  # 전문 지식
  reasoning: { s: 77.1, z: 2.05, r: 80.7, estimated: false }  # 추론
  coding: { s: 84.0, z: 1.49, r: 72.4, estimated: true }  # 코딩
  agentic: { s: 82.0, z: 1.28, r: 69.3, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.17, r: 67.6, estimated: true }  # 긴문맥
  instruction: { s: 83.7, z: 1.25, r: 68.7, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o1-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# o1-preview

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $16.5 · 출력 $66.0 · 혼합 $15.675/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.5 | +1.44 | 실측 | [[gpqa-diamond]] 76.4646464646465%×0.4 |
| 추론 | 80.7 | +2.05 | 실측 | [[gpqa-diamond]] 76.4646464646465%×1.0 |
| 코딩 | 72.4 | +1.49 | 추정 | (추정) |
| 에이전트 | 69.3 | +1.28 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 추정 | (추정) |
| 지시 따르기 | 68.7 | +1.25 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
