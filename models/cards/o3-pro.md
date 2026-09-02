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
  knowledge: { s: 88.2, z: 2.39, r: 85.8, estimated: false }  # 전문 지식
  reasoning: { s: 88.2, z: 2.7, r: 90.4, estimated: false }  # 추론
  coding: { s: 89.4, z: 1.81, r: 77.2, estimated: true }  # 코딩
  agentic: { s: 82.2, z: 1.76, r: 76.4, estimated: true }  # 에이전트
  trust: { s: 13.0, z: -0.54, r: 41.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.3, z: 1.3, r: 69.5, estimated: true }  # 긴문맥
  instruction: { s: 83.9, z: 1.31, r: 69.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o3-pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
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
| 전문 지식 | 85.8 | +2.39 | 실측 | [[gpqa-diamond]] 85.0%×0.4 |
| 추론 | 90.4 | +2.7 | 실측 | [[gpqa-diamond]] 85.0%×1.0 |
| 코딩 | 77.2 | +1.81 | 추정 | (추정) |
| 에이전트 | 76.4 | +1.76 | 추정 | (추정) |
| 신뢰성 | 41.9 | -0.54 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 69.5 | +1.3 | 추정 | (추정) |
| 지시 따르기 | 69.6 | +1.31 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
