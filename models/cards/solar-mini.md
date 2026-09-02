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
  knowledge: { s: 31.9, z: -0.42, r: 43.7, estimated: true }  # 전문 지식
  reasoning: { s: 25.0, z: -0.48, r: 42.9, estimated: true }  # 추론
  coding: { s: 30.7, z: -0.68, r: 39.8, estimated: true }  # 코딩
  agentic: { s: 20.2, z: -0.66, r: 40.1, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.32, r: 45.1, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 15.7, z: -1.04, r: 34.3, estimated: true }  # 긴문맥
  instruction: { s: 45.1, z: -0.32, r: 45.2, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-02
timestamp: 2026-09-02T00:00:00Z
---

# Solar Mini

Upstage · Open · Small(10.7B) · 컨텍스트 4k · 종합지능 **6.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · None t/s · TTFT Nones · 4k ctx` · 가성비 40.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.7 | -0.42 | 추정 | (추정) |
| 추론 | 42.9 | -0.48 | 추정 | (추정) |
| 코딩 | 39.8 | -0.68 | 추정 | (추정) |
| 에이전트 | 40.1 | -0.66 | 실측 | [[tau2-bench]] 20.0%×1.0 |
| 신뢰성 | 45.1 | -0.32 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.3 | -1.04 | 추정 | (추정) |
| 지시 따르기 | 45.2 | -0.32 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
