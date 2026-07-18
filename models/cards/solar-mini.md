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
  knowledge: { s: 30.5, z: -0.48, r: 42.7, estimated: true }  # 전문 지식
  reasoning: { s: 24.1, z: -0.5, r: 42.4, estimated: true }  # 추론
  coding: { s: 38.0, z: -0.35, r: 44.8, estimated: true }  # 코딩
  agentic: { s: 20.2, z: -0.62, r: 40.6, estimated: false }  # 에이전트
  trust: { s: 39.7, z: 0.56, r: 58.5, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 24.2, z: -0.73, r: 39.1, estimated: true }  # 긴문맥
  instruction: { s: 31.3, z: -0.88, r: 36.9, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-18
timestamp: 2026-07-18T00:00:00Z
---

# Solar Mini

Upstage · Open · Small(10.7B) · 컨텍스트 4k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · None t/s · TTFT Nones · 4k ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.7 | -0.48 | 추정 | (추정) |
| 추론 | 42.4 | -0.5 | 추정 | (추정) |
| 코딩 | 44.8 | -0.35 | 추정 | (추정) |
| 에이전트 | 40.6 | -0.62 | 실측 | [[tau2-bench]] 20.0%×1.0 |
| 신뢰성 | 58.5 | +0.56 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 39.1 | -0.73 | 추정 | (추정) |
| 지시 따르기 | 36.9 | -0.88 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
