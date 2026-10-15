---
type: Model
title: Solar Mini
creator: Upstage
license: Open
intelligence_index: 6.0
price_blended_usd_1m: 0.15
output_speed_tps: None
context_window: 4100
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.3, z: -0.71, r: 39.3, estimated: true }  # 전문 지식
  reasoning: { s: 22.3, z: -0.66, r: 40.1, estimated: true }  # 추론
  coding: { s: 9.4, z: -0.94, r: 35.9, estimated: true }  # 코딩
  agentic: { s: 20.2, z: -0.72, r: 39.2, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.47, r: 42.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 12.2, z: -1.21, r: 31.9, estimated: true }  # 긴문맥
  instruction: { s: 30.8, z: -0.99, r: 35.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-15
timestamp: 2026-10-15T00:00:00Z
---

# Solar Mini

Upstage · Open · Small · 컨텍스트 4k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · None t/s · TTFT Nones · 4k ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 39.3 | -0.71 | 추정 | (추정) |
| 추론 | 40.1 | -0.66 | 추정 | (추정) |
| 코딩 | 35.9 | -0.94 | 추정 | (추정) |
| 에이전트 | 39.2 | -0.72 | 실측 | [[tau2-bench]] 20.0%×1.0 |
| 신뢰성 | 42.9 | -0.47 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.9 | -1.21 | 추정 | (추정) |
| 지시 따르기 | 35.1 | -0.99 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
