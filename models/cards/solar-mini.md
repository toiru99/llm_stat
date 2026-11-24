---
type: Model
title: Solar Mini
creator: Upstage
license: Open
intelligence_index: None
price_blended_usd_1m: 0.15
output_speed_tps: 54.0278871067911
context_window: 4096
status: past
size_class: Small
params_b: 10.7
is_reasoning: false
radar:
  knowledge: { s: null, z: null, r: null, estimated: false }  # 전문 지식
  reasoning: { s: null, z: null, r: null, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 20.4, z: -0.94, r: 35.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: null, z: null, r: null, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Mini
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Solar Mini

Upstage · Open · Small(10.7B) · 컨텍스트 4k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트
- **약점**: —

## 실용 지표
`입력 $0.15 · 출력 $0.15 · 혼합 $0.15/1M · 54.0278871067911 t/s · TTFT 0.87755551010008s · 4k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | — | — | 측정 안 됨 | — |
| 추론 | — | — | 측정 안 됨 | — |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 35.9 | -0.94 | 실측 | [[tau2-bench]] 20.1754%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | — | — | 측정 안 됨 | — |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
