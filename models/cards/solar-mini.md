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
params_b: 10.7
is_reasoning: false
radar:
  knowledge: { s: 38.8, z: -0.09, r: 48.6, estimated: true }  # 전문 지식
  reasoning: { s: 30.4, z: -0.21, r: 46.9, estimated: true }  # 추론
  coding: { s: 45.7, z: -0.08, r: 48.8, estimated: true }  # 코딩
  agentic: { s: 20.2, z: -0.65, r: 40.2, estimated: false }  # 에이전트
  trust: { s: 16.9, z: -0.34, r: 44.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.0, z: -0.26, r: 46.1, estimated: true }  # 긴문맥
  instruction: { s: 46.2, z: -0.26, r: 46.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Solar Mini

Upstage · Open · Small(10.7B) · 컨텍스트 4k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 신뢰성, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · None t/s · TTFT Nones · 4k ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.6 | -0.09 | 추정 | (추정) |
| 추론 | 46.9 | -0.21 | 추정 | (추정) |
| 코딩 | 48.8 | -0.08 | 추정 | (추정) |
| 에이전트 | 40.2 | -0.65 | 실측 | [[tau2-bench]] 20.0%×1.0 |
| 신뢰성 | 44.9 | -0.34 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.1 | -0.26 | 추정 | (추정) |
| 지시 따르기 | 46.1 | -0.26 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
