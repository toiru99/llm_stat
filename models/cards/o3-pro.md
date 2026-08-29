---
type: Model
title: o3-pro
creator: OpenAI
license: Proprietary
intelligence_index: 33.0
price_blended_usd_1m: 26
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.2, z: 2.36, r: 85.4, estimated: false }  # 전문 지식
  reasoning: { s: 88.2, z: 2.71, r: 90.7, estimated: false }  # 추론
  coding: { s: 91.6, z: 1.84, r: 77.7, estimated: true }  # 코딩
  agentic: { s: 83.4, z: 1.82, r: 77.4, estimated: true }  # 에이전트
  trust: { s: 7.8, z: -0.77, r: 38.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.3, z: 1.32, r: 69.8, estimated: true }  # 긴문맥
  instruction: { s: 83.9, z: 1.33, r: 69.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# o3-pro

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **33.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $20.0 · 출력 $80.0 · 혼합 $26/1M · None t/s · TTFT Nones · 200k ctx` · 가성비 1.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.4 | +2.36 | 실측 | [[gpqa-diamond]] 85.0%×0.4 |
| 추론 | 90.7 | +2.71 | 실측 | [[gpqa-diamond]] 85.0%×1.0 |
| 코딩 | 77.7 | +1.84 | 추정 | (추정) |
| 에이전트 | 77.4 | +1.82 | 추정 | (추정) |
| 신뢰성 | 38.5 | -0.77 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.8 | +1.32 | 추정 | (추정) |
| 지시 따르기 | 69.9 | +1.33 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
