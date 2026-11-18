---
type: Model
title: Solar Mini
creator: Upstage
license: Open
intelligence_index: None
price_blended_usd_1m: 0.15
output_speed_tps: 54.52498006905639
context_window: 4096
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 34.9, z: -0.6, r: 41.0, estimated: true }  # 전문 지식
  reasoning: { s: 22.9, z: -0.63, r: 40.6, estimated: true }  # 추론
  coding: { s: 15.7, z: -0.82, r: 37.6, estimated: true }  # 코딩
  agentic: { s: 20.4, z: -0.85, r: 37.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 32.9, z: -0.62, r: 40.8, estimated: true }  # 긴문맥
  instruction: { s: 40.5, z: -0.56, r: 41.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Solar Mini

Upstage · Open · Small · 컨텍스트 4k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · 54.52498006905639 t/s · TTFT 0.8390420713333621s · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 41.0 | -0.6 | 추정 | (추정) |
| 추론 | 40.6 | -0.63 | 추정 | (추정) |
| 코딩 | 37.6 | -0.82 | 추정 | (추정) |
| 에이전트 | 37.3 | -0.85 | 실측 | [[tau2-bench]] 20.175438596491198%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.8 | -0.62 | 추정 | (추정) |
| 지시 따르기 | 41.6 | -0.56 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
