---
type: Model
title: o1-preview
creator: OpenAI
license: Proprietary
intelligence_index: 11.0
price_blended_usd_1m: 15.675
output_speed_tps: None
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 76.7, z: 1.58, r: 73.7, estimated: false }  # 전문 지식
  reasoning: { s: 76.7, z: 1.82, r: 77.3, estimated: false }  # 추론
  coding: { s: 80.0, z: 1.47, r: 72.1, estimated: true }  # 코딩
  agentic: { s: 73.5, z: 1.32, r: 69.7, estimated: true }  # 에이전트
  trust: { s: 31.8, z: 0.23, r: 53.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 89.4, z: 1.13, r: 67.0, estimated: true }  # 긴문맥
  instruction: { s: 84.1, z: 1.24, r: 68.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o1-preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# o1-preview

OpenAI · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **11.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $16.5 · 출력 $66.0 · 혼합 $15.675/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 0.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.7 | +1.58 | 실측 | [[gpqa-diamond]] 76.0%×0.4 |
| 추론 | 77.3 | +1.82 | 실측 | [[gpqa-diamond]] 76.0%×1.0 |
| 코딩 | 72.1 | +1.47 | 추정 | (추정) |
| 에이전트 | 69.7 | +1.32 | 추정 | (추정) |
| 신뢰성 | 53.5 | +0.23 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.0 | +1.13 | 추정 | (추정) |
| 지시 따르기 | 68.6 | +1.24 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
